import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex gap-4 pr-7 bg-black-100'>
         <Link href="/">Home Page</Link>
         <Link href="/about"className='pl-4 pr-4'>About us</Link>
         <Link href="/contact"className='pl-4 pr-4>Contact us</Link>
         <Link href="/address"className='pl-4 pr-4>Address Page</Link>
    </div>
  )
}

export default Header