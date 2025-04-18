import React from 'react'
import menus from '../Data/menusData'

const ProfileMenus = () => {

  return (
    <nav className='md:ps-7 pt-[58px]'>
        <ul className='flex flex-col gap-4 items-center md:items-start'>
            {menus.map(({id, name, icon})=>{
                return(
                    <li key={id} className='flex items-center gap-[5px] text-[#5C5C5C] text-base leading-[25px] !font-poppins duration-300 hover:text-[#F1874F]'>
                        <span>{icon}</span>
                        <span className='hidden md:block'>{name}</span>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default ProfileMenus