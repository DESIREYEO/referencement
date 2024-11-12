"use client";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero";
import Vision from "./_components/Vision";
import Advantages from "./_components/Advantages";
import Values from "./_components/Values";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Footer from "./_components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée de l'animation en millisecondes
      once: true, // si vrai, l'animation ne se joue qu'une seule fois
      offset: 200, // ajustez cette valeur selon vos besoins
    });
  }, []);
  return (
    <div>
      <Header/>
      <Hero />
      <Vision />
      <Advantages />

      <Values />
      {/*<ActiveSlider/>*/}
      <Footer />
    </div>
  );
}
