import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../../public/assets/svg/Logo.svg";
import Fb from "../../../public/assets/svg/Facebook.svg";
import Ig from "../../../public/assets/svg/Instagram.svg";
import Tt from "../../../public/assets/svg/Twitter.svg";
import Yt from "../../../public/assets/svg/YouTube.svg";
import Lk from "../../../public/assets/svg/LinkedIn.svg";
import downloadGooglecon from "../../../public/assets/svg/downloadGooglecon.svg";
import downloadAppleIcon from "../../../public/assets/svg/downloadAppleIcon.svg";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 py-16 mt-32"
      style={{ backgroundColor: "#5E5D5D" }}
    >
      <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between items-center space-y-8 xl:space-y-0">
        <div className=" flex flex-col xl:flex-row items-center space-x-0 xl:space-x-8">
          <Image
            className="w-24 md:w-24 "
            src={Logo}
            alt="Picture of the author"
          />
          <div className="flex flex-col items-center">
          <Link href={'/Confidentialite'}>
          <p className="text-sm xl:text-lg 2xl:text-xl pt-5 xl:pt-0 text-center">
            Politique de confidentialité
          </p>
          </Link>
          <Link href={'/Cgu'}>
          <p className="text-sm xl:text-lg 2xl:text-xl pt-5 xl:pt-0 text-center">
          Conditions générales d'utilisation (CGU)
          </p>
          </Link>
          <p className="text-sm xl:text-lg 2xl:text-xl pt-5 xl:pt-0 text-center">
            Copyright © 2024 BAKKRô | All Rights Reserved
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm xl:text-lg 2xl:text-xl text-center">
            Inscription à notre newsletter
          </p>
          <form className="w-full xl:w-9/12 flex pt-5">
            <input
              type="email"
              placeholder="Votre mail"
              className="pl-5 w-full p-2 h-15 rounded-l-[40px] focus:outline-none sm:w-48 md:w-64 lg:w-72 xl:w-80 text-black"
              style={{ height: "4.75rem" }}
            />

            <button
              type="submit"
              className="bg-white text-black p-2 h-15 rounded-r-[40px] hover:bg-primary hover:text-white sm:w-24 md:w-32 lg:w-36 xl:w-40"
              style={{ height: "4.75rem" }}
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm xl:text-lg 2xl:text-xl text-center">
            Suivez-nous
          </p>
          <div className="flex space-x-4 pt-5">
            <a href="#">
              <Image className="" src={Fb} alt="Facebook" />
            </a>
            <a href="#">
              <Image className="" src={Tt} alt="Twitter" />
            </a>
            <a href="#">
              <Image className="" src={Ig} alt="Instagram" />
            </a>
            <a href="#">
              <Image className="" src={Lk} alt="LinkedIn" />
            </a>
            <a href="#">
              <Image className="" src={Yt} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm xl:text-lg 2xl:text-xl text-center xl:hidden">
            Cliquer ici pour télécharger l'application mobile
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex flex-row space-x-3">
              <Image
                priority
                src={downloadAppleIcon}
                alt="Télécharger sur App Store"
                className="w-28 lg:w-40 xl:hidden"
              />
              <Image
                priority
                src={downloadGooglecon}
                alt="Télécharger sur Google Play"
                className="w-28 lg:w-40 xl:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
