import React from "react";
import Image from "next/image";
import Mockup1 from "../../public/assets/svg/Mockup1.svg";


const Advantages = () => {
  return (
    <div className="pt-24 sm:pt-32 xl:pt-48 bg-custom-gradient w-full">
      <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-6xl font-semibold text-center">
        Avantages avec Bakkrô
      </h1>
      <div className="container mx-auto py-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-delay="100">
          <Image
            priority
            src={Mockup1}
            alt="Immersion totale dans le bien immobilier"
            className="w-2/5 md:w-3/12 xl:w-1/5"
          />
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="sm:px-0 font-semibold text-lg xl:text-2xl 2xl:text-3xl">
              Immersion totale dans le bien immobilier
            </h3>
            <p className="px-7 sm:px-0 text-base xl:text-xl 2xl:text-2xl pt-5 sm:w-4/5 mt-3">
              Plongez au cœur de chaque propriété grâce à notre technologie de visite 3D. Explorez chaque pièce, examinez les moindres détails et visualisez votre futur chez-vous comme si vous y étiez, sans avoir à vous déplacer.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 py-8"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-delay="100">
          <Image
            priority
            src={Mockup1}
            alt="Paiement sécurisé par mobile money ou cartes bancaire"
            className="w-2/5 md:w-3/12 xl:w-1/5"
          />
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="px-6 sm:px-0 font-semibold text-lg xl:text-2xl 2xl:text-3xl">
              Paiement sécurisé par mobile money ou cartes bancaire
            </h3>
            <p className="px-7 sm:px-0 text-base xl:text-xl 2xl:text-2xl pt-5 sm:w-4/5 mt-3">
              Réalisez vos transactions immobilières en toute sérénité avec nos options de paiement sécurisées. Que ce soit par mobile money ou cartes bancaires, Bakkrô garantit la protection de vos informations financières à chaque étape.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-delay="100">
          <Image
            priority
            src={Mockup1}
            alt="Planifiez des rendez-vous directement sur l’application Bakkrô"
            className="w-2/5 md:w-3/12 xl:w-1/5"
            />
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="px-6 sm:px-0 font-semibold text-lg xl:text-2xl 2xl:text-3xl">
              Planifiez des rendez-vous directement sur l’application Bakkrô
            </h3>
            <p className="px-7 sm:px-0 text-base xl:text-xl 2xl:text-2xl pt-5 sm:w-4/5 mt-3">
              Simplifiez la gestion de vos visites en planifiant vos rendez-vous directement depuis notre application. Choisissez le créneau qui vous convient et organisez vos visites en toute simplicité, sans perdre de temps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
