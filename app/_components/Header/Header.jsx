"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../public/assets/svg/Logo.svg";
import "../../globals.css";
import "./header.css";
import Link from "next/link";

// Navigation links array
const navigation = [
  { name: "Accueil", href: "#" },
  { name: "À propos", href: "#" },
  { name: "Partenaires", href: "#" },
  // { name: "Contactez-nous", href: "#" },
];

export default function Header({ pathname }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const [scrolled, setScrolled] = useState(false); // State for scroll position

  // useEffect hook to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <div className="relative ">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300  ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <nav
          className="flex items-center justify-between py-6  container mx-auto"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ml-4 lg:ml-0">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                className="w-16 md:w-24"
                src={Logo}
                alt="Picture of the author"
              />
            </a>
          </div>
          {/* <div className="flex lg:hidden mr-2 lg:mr-0">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // Conditional class for hover underline color based on scroll state
                className={` font-semibold leading-6 text-lg 2xl:text-2xl text-gray-900 ${
                  scrolled
                    ? "hover-underline-scrolled"
                    : "hover-underline-default"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="ButtonMediumContainer">
              {pathname !== "/SignIn" &&
                pathname !== "/SignUp" &&
                pathname !== "/AdminPanel" && (
                  <Link href={"/SignIn"}>
                    <button
                      className={`${
                        scrolled
                          ? "ButtonMedium text-lg 2xl:text-2xl"
                          : "ButtonMedium ButtonMediumHoverScroll text-lg 2xl:text-2xl"
                      }`}
                    >
                      Espace Pro
                    </button>
                  </Link>
                )}
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="./assets/Logo.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-lg 2xl:text-2xl font-semibold leading-7 text-gray-900 ${"hover-underline-scrolled"}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 hidden lg:block">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg 2xl:text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <button className={" ButtonMedium"}>Espace Pro</button>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
