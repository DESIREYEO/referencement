"use client";
import React from "react";

function ActiveSlider() {
  const row1 = [
    "https://img.freepik.com/vecteurs-libre/logo-pour-solutions-accueil-immobilier-qui-est-solution-accueil_527952-33.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716422400&semt=ais_user",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAE12c3LfQM7eJV8QSo8IHVFZDF9Cji_UdgbT63RfOQ&s",
    "https://kalimbaimmobilier.com/wp-content/agence168860-images/logo_12_0.png",
    "https://isis-immobilier.com/hs-fs/hubfs/LOGO%20ISIS.jpg?width=3508&height=1379&name=LOGO%20ISIS.jpg",
    "https://www.carolineimmo.com/ressources_client/images/logo.png",
    "https://aici.ci/themes/aici/logo.png",
  ];

  return (
    <div className=" flex items-center justify-center text-black relative py-24 sm:py-32 xl:py-48">
      <div className="container sm:mx-20 h-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          Nos Partenaires
        </h1>
        <div className="flex w-full overflow-hidden pt-20">
          <div className="flex animate-scrollX">
            {row1.map((e1, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={e1}
                  className="object-contain w-full h-60 rounded-md aspect-[16/9] p-1 shadow-md"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scrollX">
            {row1.map((e1, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={e1}
                  className="object-contain w-full h-60 rounded-md aspect-[16/9] p-1 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveSlider;
