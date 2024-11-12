"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { useUser } from "../../utils/UserSession";

function AdminHeader() {
 const path = usePathname();
const { advertiserId, user} = useUser();



  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md ">
      <div className="px-10 mx-10">
        <div className="px-10 mx-6">
          <div className="py-5 flex justify-between items-center">
            <div>
              <Image src="/logo.svg" width={90} height={100} alt="logo" priority />
            </div>
            <div className="flex items-center gap-8">
                <p>{user.email}</p>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
