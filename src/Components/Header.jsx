import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome,
    HiStar,
    HiTv,
    HiPlayCircle,
   
    HiMagnifyingGlass} from 'react-icons/hi2'
import { HiPlus,HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem'


function Header() {
    const [toggle,settoggle]= useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINAL',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle

        },
        {
            name:'SERIES',
            icon:HiTv
        }  
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-10'>

      <img src={logo} className='w-[80px] md:w-[130px] object-cover ' />
      <div className='hidden md:flex gap-20 mt-4'>
      {menu.map((item,index)=>(
          <HeaderItem name={item.name} Icon={item.icon} key={index}/>
        ))}
        </div>
        <div className='flex md:hidden gap-4'>
      {menu.map((item,index)=>index<3&&(
          <HeaderItem name={''} Icon={item.icon} key={index}/>
        ))}
        <div className='md:hidden' onClick={()=>settoggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
        {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
        {menu.map((item,index)=>index>2&&(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>:null}
        </div>
        </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745 " className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
