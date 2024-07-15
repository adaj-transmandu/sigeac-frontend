"use client";

import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  const {theme} = useTheme();
  console.log(theme)
  return (
    <>
        {
          theme === 'light' ? <Image src={'/logo.png'} alt='Logo SIGEAC' width={150} height={150} /> : <Image src={'/logo-dark.png'} alt='Logo SIGEAC' width={150} height={150} />
        }
    </>
  )
}

export default Logo