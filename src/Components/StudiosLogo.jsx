import React from 'react'
import marvel from '../assets/Images/marvel.png';
import disney from '../assets/Images/disney.png';
import nationalig from '../assets/Images/nationalG.png';
import pixar from '../assets/Images/pixar.png';
import starwar from '../assets/Images/starwar.png';

import disneyV from '../assets/Videos/disney.mp4';
import marvelV from '../assets/Videos/marvel.mp4';
import nationaligV from '../assets/Videos/national-geographic.mp4';
import pixarV from '../assets/Videos/pixar.mp4';
import starwarV from '../assets/Videos/star-wars.mp4';

function StudiosLogo() {
    const List=[
    {
        id:1,
        image:disney,
        video:disneyV,
    },
    {
        id:2,
        image:pixar,
        video:pixarV,
        
    },
    {
        id:3,
        image:marvel,
        video:marvelV,
        
        },
        {
            id:4,
            image:starwar,
            video:starwarV,
            
        },
        {
            id:5,
            image:nationalig,
            video:nationaligV,
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
    {List.map((item)=>(
        

        <div className='border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800 mt-4
        '>
             <video src={item.video} autoPlay loop playsInline muted 
        className='absolute w-full z-0  top-0 rounded-md 
        opacity-0 hover:opacity-50'/> 
            <img src={item.image} className='w-full z-[1] opacity-100' /> 


           
        </div>
    ))}
</div>
  )
}

export default StudiosLogo
