import Image from 'next/image'
import React from 'react'
import ProfileImg from '@/public/img/profile.png'
import ProfileMenus from './ProfileMenus'

const ProfileSideBar = () => {
  return (
    <section className='w-[60px] md:w-[282px] bg-white h-full rounded-t-[6px]'>
        <div>
            <div className='h-[150px] w-full bg-[linear-gradient(-45deg,hsla(27,100%,59%,1),hsla(27,100%,85%,1))] rounded-t-[6px]'></div>
            <div className='relative md:top-[-70px] top-[-30px]'>
                <Image src={ProfileImg} alt='Profile picture' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full block mx-auto' />
                <h4 className='!font-poppins font-medium text-lg leading-7 text-center text-[#3D3D3D] pt-3 hidden md:block'>Mark Jecno</h4>
                <p className='!font-poppins text-sm leading-[21px] text-center text-[#747474] hidden md:block'>mark-jecno@gmail.com</p>
                <ProfileMenus />
            </div>
        </div>
    </section>
  )
}

export default ProfileSideBar