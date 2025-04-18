import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/public/img/logo.png'
import USER from '@/public/img/user.png'

const Header = () => {
  return (
    <header className='drop-shadow-[0_4px_8px_rgba(0,0,0,0.16)] bg-white'>
        <div className="container mx-auto px-6">
            <div className='flex justify-between items-center py-[17px]'>
                {/* logo */}
                <div>
                    <Link href="/">
                        <Image src={LOGO} alt="logo image" className='w-[102px]' />
                    </Link>
                </div>
                
                {/* user */}
                <div>
                    <Link href="/profile">
                        <Image src={USER} alt="USER image" className='w-[65px]' />
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header