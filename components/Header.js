import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='shadow-sm border-b bg-[#202020] sticky top-0 z-50'>
            <div className='flex justify-between bg-[#202020] max-w-6xl mx-5 lg:mx-auto'>
                <div className='relative hidden cursor-pointer w-80 lg:inline-grid'>
                    <GiHamburgerMenu className='w-full text-white' />
                    <Image
                        src={logo}
                        layout="fill"
                        objectFit='contain'
                        alt='logo'
                    />
                </div>
                <div className='max-w-xs'>
                    <div className='relative p-3 mt-1 rounded-md '>
                        <div className='absolute inset-y-0 flex items-center pl-3 pointer-events-none '>
                            <AiOutlineSearch className='w-5 h-5 text-gray-500 ' />
                        </div>
                        <input type="text" className='block w-full pl-10 border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-black focus:border-black' placeholder='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header