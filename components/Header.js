import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import headerlogo from '../assets/headerlogo.png'
import { BsYoutube } from 'react-icons/bs'
import { IoMdSearch, IoMdAdd } from 'react-icons/io'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex h-full p-4 bg-[#202020]'>
            <div className='flex flex-row items-center justify-center'>
                <GiHamburgerMenu className='w-full text-white' />
                <BsYoutube className='w-full ml-2 text-red-600' />
                <h1 className='ml-2 text-white'>Youtube</h1>
            </div>
        </div>
    )
}

export default Header