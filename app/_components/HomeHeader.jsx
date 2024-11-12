"use client"; import React, { useEffect, useState } from "react"; import Image from "next/image"; import { usePathname } from "next/navigation"; import { supabaseClient } from "@/utils/supabase/client"; import { Bell } from "lucide-react"; import { useUser } from "../../utils/UserSession";

function HomeHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const path = usePathname();
  const { logoUrl, notifications, notificationCount, advertiserId, setLogoUrl, setNotifications, setNotificationCount } = useUser();

  useEffect(() => {
    const fetchLogo = async () => {
      if (!logoUrl && advertiserId) {
        const { data, error } = await supabaseClient
          .from("advertiserpremium")
          .select("logo")
          .eq('id', advertiserId)
          .single();

        if (error) {
          console.error("Erreur lors de la récupération du logo :", error.message);
        } else {
          setLogoUrl(data.logo);
        }
      }
    };

    const fetchNotifications = async () => {
      if (advertiserId && notifications.length === 0) {
        const { data, error } = await supabaseClient
          .from("notification")
          .select("*")
          .eq("user_id", advertiserId)
          .order("created_at", { ascending: false});

        if (error) {
          console.error("Erreur lors de la récupération des notifications :", error.message);
        } else {
          setNotifications(data);
          console.log("dddata", data);
          const unreadCount = data.filter(notification => !notification.is_read).length;
          setNotificationCount(unreadCount);
          console.log("pppp",unreadCount);
        }
      }
    };

    fetchLogo();
    fetchNotifications();

    const notificationSubscription = supabaseClient
      .channel('public:notification')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notification', filter: `user_id=eq.${advertiserId}` }, payload => {
        setNotifications(prevNotifications => [payload.new, ...prevNotifications]);
        if (!payload.new.is_read) {
          setNotificationCount(prevCount => prevCount + 1);
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(notificationSubscription);
    };
  }, [advertiserId, logoUrl, notifications.length, setLogoUrl, setNotifications, setNotificationCount]);

  const handleNotificationClick = async () => {
    setShowNotifications(prevState => !prevState);

    if (showNotifications) {
      const { error } = await supabaseClient
        .from("notification")
        .update({ is_read: true })
        .eq("user_id", advertiserId)
        .eq("is_read", false);

      if (error) {
        console.error("Erreur lors de la mise à jour des notifications :", error.message);
      } else {
        setNotificationCount(0);
        setNotifications(prevNotifications =>
          prevNotifications.map(notification => ({
            ...notification,
            is_read: true,
          }))
        );
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-10 mx-10">
        <div className="px-10 mx-6">
          <div className="py-5 flex justify-between items-center">
            <div>
              <Image src="/logo.svg" width={90} height={100} alt="logo" priority />
            </div>
            <div className="flex items-center gap-8">
              <div className="relative ml-4">
                <Bell
                  className="w-6 h-6 cursor-pointer hover:text-orange-500"
                  onClick={handleNotificationClick}
                />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {notificationCount}
                  </span>
                )}
                {showNotifications && (
                  <div className="absolute top-8 right-0 w-72 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`px-4 py-2 border-b border-gray-100 hover:bg-gray-50 ${
                          !notification.is_read ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div className="text-xs text-gray-500">
                          {new Date(notification.created_at).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-sm text-gray-800">{notification.message}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {logoUrl && (
                <div className="flex items-center justify-center h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                  <Image src={logoUrl} width={110} height={100} alt="Profile Logo" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
