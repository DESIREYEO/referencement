import React from "react";
import Image from "next/image";
import Valeur1 from "../../public/assets/svg/Valeur1.svg";
import Valeur2 from "../../public/assets/svg/Valeur2.svg";
import Valeur3 from "../../public/assets/svg/Valeur3.svg";
const Values = () => {
  return (
    <div className="pt-24 sm:pt-32 xl:pt-48 container mx-auto">
      <div className=" flex flex-col items-center text-center">
        <h1 className="w-10/12 text-2xl sm:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
        Nos Valeurs
        </h1>
        {/* text-lg xl:text-2xl 2xl:text-3xl */}
        <p className="px-7 sm:px-0 text-base xl:text-xl 2xl:text-2xl pt-5 sm:w-4/5 font-light">
          Chez Bakkrô, nous nous engageons à transformer le marché immobilier en
          Côte d'Ivoire en plaçant nos utilisateurs au cœur de notre démarche.
          Nos valeurs fondamentales reflètent notre volonté de créer une
          expérience unique, sécurisée et accessible pour tous.
        </p>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-14 lg:pt-28"
        data-aos="zoom-in"
        data-aos-offset="600"
        data-aos-delay="100"
      >
        <div className="flex flex-col items-center">
          <Image
           className="VisionLogoImage"
            priority
            src={Valeur1}
            alt="télécharger sur app store"
          />
          <h3 className="font-semibold text-lg xl:text-2xl 2xl:text-3xl py-2 text-center">
            Innovation
          </h3>
          <p className="px-10 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl pt-2 w-11/12 sm:w-1/2 lg:w-4/5 font-light">
            Nous croyons en la puissance de l'innovation pour améliorer le
            quotidien de nos utilisateurs. Grâce à notre technologie de visite
            3D et à une interface intuitive.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
           className="VisionLogoImage"
            priority
            src={Valeur2}
            alt="télécharger sur app store"
          />
          <h3 className="font-semibold text-lg xl:text-2xl 2xl:text-3xl py-2 text-center">
            Transparence
          </h3>
          <p className="px-10 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl pt-2 w-11/12 sm:w-1/2 lg:w-4/5 font-light">
            La transparence est au cœur de nos actions. Nous nous assurons que
            toutes les annonces sont vérifiées et que les informations fournies
            sont exactes et détaillées.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
           className="VisionLogoImage"
            priority
            src={Valeur3}
            alt="télécharger sur app store"
          />
          <h3 className="font-semibold text-lg xl:text-2xl 2xl:text-3xl py-2 text-center">
            Accessibilité
          </h3>
          <p className="px-10 sm:px-0 text-center text-sm xl:text-lg 2xl:text-xl pt-2 w-11/12 sm:w-1/2 lg:w-4/5 font-light">
            Nous visons à rendre le marché immobilier accessible à tous, en
            simplifiant les démarches et en réduisant les coûts liés aux
            transactions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Values;






