"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'




function Header() {
  


 

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className="px-10 mx-10">
        <div className="px-10 mx-6">
          <div className="py-5 flex justify-between items-center">
            <div>
              {/* Logo */}
              <Image src="/logo.svg" width={90} height={100} alt="logo" className='' />
            </div>
            {/* Navigation */}
            <ul className="flex-grow flex justify-center gap-10">
              <Link href={'/'}>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">Accueil</li>
              </Link>
              <Link href={'/about'}>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">À propos</li>
              </Link>
            </ul>
            {/* Button */}
              <Link href={'/SignIn'}>Se connecter</Link>
                     
          </div>
        </div>
      </div>
    </div>
  );

}

export default Header;
