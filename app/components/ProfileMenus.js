import React from 'react'
import menus from '../Data/menusData'

const ProfileMenus = () => {

  return (
    <nav className='ps-7 pt-[58px]'>
        <ul className='flex flex-col gap-4'>
            {menus.map(({id, name, icon})=>{
                return(
                    <li key={id} className='flex items-center gap-[5px] text-[#5C5C5C] text-base leading-[25px] !font-poppins duration-300 hover:text-[#F1874F]'>
                        <span>{icon}</span>
                        <span>{name}</span>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default ProfileMenus