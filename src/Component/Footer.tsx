import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify-center p-5 gap-4 bg-black-100'>
        <Link href="/about"className='pl-3 pr-5'>Privacy</Link>
        <Link href="/about"className='pl-3 pr-5'>Policy</Link>
        <Link href="/contact"className='pl-3 pr-5'>Terms</Link>
        <Link href="/address"className='pl-3 pr-5'>Conditions</Link>
    </div>
  )
}

export default Footer