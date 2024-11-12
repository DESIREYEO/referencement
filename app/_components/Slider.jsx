"use client"
import React from 'react';
import { FaDesktop, FaSearch, FaImages, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

function Slider() {
  return (
    <div className='p-10'>
      <h1 className="text-4xl font-bold text-center">Une autre vision de l'immobilier</h1>
      <p className="mt-4 text-center max-w-2xl mx-auto">
        Une perspective nouvelle et innovante sur le secteur immobilier. Des idées novatrices, des technologies émergentes et des solutions créatives pour réinventer la façon dont nous achetons, vendons et vivons dans des propriétés. Une plateforme numérique qui facilite les transactions entre acheteurs et vendeurs.
      </p>
      <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Première colonne avec deux lignes verticales */}
          <div className="flex flex-col justify-around">
            <div className="items-center mb-5">
             
            <Image src="/computer.svg" width={90} height={100} alt="ordinateur" className="w-auto h-auto max-w-xs mx-auto"/>
            
              <div>
                <h2 className="text-2xl font-bold">Interface conviviale</h2>
                <p className="mt-2 text-gray-600">
                  On a une expérience utilisateur intuitive et agréable. La navigation est simple, les fonctionnalités sont facilement accessibles et le design est attrayant.
                </p>
              </div>
            </div>
            <div className="items-center mt-5">
            <Image src="/picture.svg" width={90} height={100} alt="ordinateur" className="w-auto h-auto max-w-xs mx-auto"/>
              <div>
                <h2 className="text-2xl font-bold">Galeries d'images et visites virtuelles de haute qualité</h2>
                <p className="mt-2 text-gray-600">
                  Des images et des vidéos de haute qualité pour que les visites virtuelles soient fluides et informatives.
                </p>
              </div>
            </div>
          </div>

          {/* Deuxième colonne avec une photo */}
          <div className="flex">
            <img src="/phone.svg" alt="Description de la photo" className="w-full h-auto max-w-xs mx-auto"/>
          </div>

          {/* Troisième colonne avec deux lignes verticales */}
          <div className="flex flex-col justify-around">
            <div className="items-center mb-5">
             
            <Image src="/computer.svg" width={10} height={10} alt="ordinateur" className="w-auto h-auto max-w-xs mx-auto"/>
            
              <div>
                <h2 className="text-2xl font-bold">Interface conviviale</h2>
                <p className="mt-2 text-gray-600">
                  On a une expérience utilisateur intuitive et agréable. La navigation est simple, les fonctionnalités sont facilement accessibles et le design est attrayant.
                </p>
              </div>
            </div>
            <div className="items-center mt-5">
            <Image src="/picture.svg" width={10} height={10} alt="ordinateur" className="w-auto h-auto max-w-xs mx-auto"/>
              <div>
                <h2 className="text-2xl font-bold">Galeries d'images et visites virtuelles de haute qualité</h2>
                <p className="mt-2 text-gray-600">
                  Des images et des vidéos de haute qualité pour que les visites virtuelles soient fluides et informatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
