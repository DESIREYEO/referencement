import React from "react";
import Image from "next/image";
import Group1 from "../../public/assets/svg/Group1.svg";
import Group2 from "../../public/assets/svg/Group2.svg";
import Group3 from "../../public/assets/svg/Group3.svg";
import Group4 from "../../public/assets/svg/Group4.svg";
import Mockup1 from "../../public/assets/svg/Mockup1.svg";
//2xl: grand ecran ; xl: ordi standard ; lg: grande tablette ; md: petite tablette ; sm: telephone
const SectionVision = () => {
  return (
    <div className="pt-24 sm:pt-32 xl:pt-48 container mx-auto">
      <div className=" flex flex-col items-center text-center">
        <h1 className="w-10/12 text-2xl sm:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          Une autre vision de l’immobilier
        </h1>
        {/* text-lg xl:text-2xl 2xl:text-3xl */}
        <p className="px-7 sm:px-0 text-base xl:text-xl 2xl:text-2xl pt-5 sm:w-4/5 font-light">
          Découvrez une expérience immobilière révolutionnaire avec Bakkrô !
          Profitez de visites à distance grâce à notre fonctionnalité de visite 3D, accompagnées de photos,
          vidéos et descriptions détaillées. Gagnez du temps et de l'argent en évitant les déplacements inutiles et les désagrements avec des annonces vérifiées
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-14 lg:pt-32">
        <div className="flex flex-col items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="100">
          <div
            className="flex flex-col items-center">
            <Image
              className="VisionLogoImage"
              priority
              src={Group1}
              alt="télécharger sur app store"
            />
            <h3 className="font-semibold text-base sm:text-lg xl:text-2xl 2xl:text-3xl py-2 text-center w-4/5 sm:w-5/5">
              Une interface conviviale
            </h3>
            <p className="hidden md:block px-5 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl sm:w-4/5 font-light">
              Bénecfiez d'une expérience utilisateur intuitive et agréable.
            </p>
          </div>
          <div
            className="flex flex-col items-center pt-10 xl:pt-32">
            <Image
              className="VisionLogoImage"
              priority
              src={Group3}
              alt="télécharger sur app store"

            />
            <h3 className="font-semibold text-base sm:text-lg xl:text-2xl 2xl:text-3xl py-2 text-center w-4/5 sm:w-5/5">
              Images de haute qualité
            </h3>
            <p className="hidden md:block px-5 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl sm:w-4/5 font-light">
              Des images et visites virtuelles de haute qualitée.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center hidden md:block">
          <Image
            priority
            src={Mockup1}
            alt="télécharger sur app store"
            className="self-center h-4/5"
          />
        </div>
        <div className="flex flex-col items-center"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="100">
          <div
            className="flex flex-col items-center">
            <Image
              className="VisionLogoImage"
              priority
              src={Group2}
              alt="télécharger sur app store"
            />
            <h3 className="font-semibold text-base sm:text-lg xl:text-2xl 2xl:text-3xl py-2 text-center w-4/5 sm:w-5/5">
            Des recherches avancées
            </h3>
            <p className="hidden md:block px-5 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl sm:w-4/5 font-light">
            Possibilité de rechercher des biens de manière efficace.
            </p>
          </div>
          <div
            className="flex flex-col items-center pt-10 xl:pt-32">
            <Image
              className="VisionLogoImage"
              priority
              src={Group4}
              alt="télécharger sur app store"

            />
            <h3 className="font-semibold text-base sm:text-lg xl:text-2xl 2xl:text-3xl py-2 text-center w-4/5 sm:w-5/5">
            Carte Goole Maps Intégré
            </h3>
            <p className="hidden md:block px-5 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl sm:w-4/5 font-light">
            La localisation des biens et des comodités sur la carte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionVision;







