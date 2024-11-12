"use client"
import React from 'react';
import Image from 'next/image';
import loadingIcon from '../../public/loading.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 h-screen">
      <div className="text-center">
        <p className="text-lg text-gray-800 mb-2 font-semibold">Chargement en cours...</p>
        <div className="w-36 h-36">
          <Image src={loadingIcon} width={150} height={150} alt="Loading icon" />
        </div>
        <div className="loader h-2.5 bg-orange-600 relative overflow-hidden mt-5 w-full">
          <div className="w-full h-full bg-orange-200 absolute top-0 left-full animate-loading"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
