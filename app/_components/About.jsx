"use client"
import React from 'react'
import Button from '@/components/ui/button'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function About() {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };

        const data= [
            {
            name:'Boka Neol',
            img:'/profilai.jpg',
            review:'CTO Développeur full stack web Mobile Lorem ipsum dolor sit amet. Et officiis alias est provident iure aut nobis facere 33 aspernatur minus id doloribus'},
            {
             name:'Hervé Melvin Menie Essono',
            img:'/profilai.jpg',
            review:'Product manager/ Product Owner Lorem ipsum dolor sit amet. Et officiis alias est provident iure aut nobis facere 33 aspernatur minus id doloribus'},
            {
            name:'Djibril Bamba',
            img:'/profilai.jpg',
            review:'Le Boss Lorem ipsum dolor sit amet. Et officiis alias est provident iure aut nobis facere 33 aspernatur minus id doloribus'},   
            {
            name:'Sidibe Scheick',
            img:'/profilai.jpg',
            review:'Coordinateurs de projet / Responsables opérationnels Lorem ipsum dolor sit amet. Et officiis alias est provident iure aut nobis facere'},     
            {
            name:'Efrem Yousouf',
            img:'/profilai.jpg',
            review:'App Developer'},      {
             name:'Jerry Jerassaint',
                img:'/profilai.jpg',
            review:'UX/UI Designer'},      
            {
            name:'Ahmed Ighilahriz',
            img:'/profilai.jpg',
            review:'Web Developer'}

        ]
        
    return (
      <div><h2 className="mt-10 text-3xl font-bold sm:text-4xl text-center ">A propos de nous</h2> 
      <div className='w-3/4 m-auto 'style={{ backgroundColor: 'orange' }}>
        <div className='mt-5 p-10 ' >

            <Slider {...settings}>
              {data.map((d, index) => (
  
                  <div key={index} className="bg-white h-[450px] text-black rounded-xl">
                      <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img src={d.img} alt="photo" className="h-44 w-44 rounded-full"/>
  
                  </div>
  
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-xl font-semibold">{d.name}</p>
                     
                      <p className="text-center">{d.review}</p>
                      <button className='bg-primary text-white text-lg px-6 py-1 rounded-xl'>VOIR PLUS</button>

                  </div>
        </div>      
              ))}

            </Slider>
          
              
      </div> 
      </div>
      </div>
    )
  }
export default About
