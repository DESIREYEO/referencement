"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import downloadGooglecon from "../../public/assets/svg/downloadGooglecon.svg";
import downloadAppleIcon from "../../public/assets/svg/downloadAppleIcon.svg";

function Hero() {
  const router = useRouter();

  return (
    <div className="pt-36 sm:pt-14 md:pt-32 container mx-auto flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center md:text-left">
        <div className="flex flex-col md:h-4/5">
          <h1 className="font-semibold tracking-tight px-5 sm:px-0 text-gray-900 text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            BIENVENUE SUR BAKKRÔ
          </h1>
          <h3 className="px-5 sm:px-0 my-5 sm:my-10 lg:w-4/5 text-lg xl:text-2xl 2xl:text-3xl font-extralight leading-snug">
            Trouvez le bien immobilier de vos rêves sans bouger de chez vous, avec
            l'application qui Djâ actuellement à Abidjan !
          </h3>
          <p className="text-base xl:text-xl hidden md:block pb-3 ">
            Cliquez ci-dessous pour télécharger l’application
          </p>
          <div className="flex justify-center sm:justify-start hidden md:block">
            <div className="flex flex-row mt-2">
              <Image
                priority
                src={downloadAppleIcon}
                alt="télécharger sur app store"
                className="w-28 lg:w-40 xl:w-60"
              />
              <Image
                priority
                src={downloadGooglecon}
                alt="télécharger sur app store"
                className="ms-3 lg:ms-6 w-28 lg:w-40 xl:w-60"
              />
            </div>
          </div>
        </div>
        <div className="video flex flex-col justify-center items-center" >
          <video autoPlay muted loop className="py-2 sm:py-0 w-2/3 sm:w-1/2 md:w-9/12 object-cover">
            <source src="assets/videos/VideoHero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm pb-3 md:hidden">
            Cliquez ci-dessous pour télécharger l’application
          </p>
          <div className="flex justify-center sm:justify-start md:hidden">
            <div className="flex flex-row mt-2">
              <Image
                priority
                src={downloadAppleIcon}
                alt="télécharger sur app store"
                className="w-28 lg:w-40 xl:w-60"
              />
              <Image
                priority
                src={downloadGooglecon}
                alt="télécharger sur app store"
                className="ms-3 lg:ms-6 w-28 lg:w-40 xl:w-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Hero;
