import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2  border-solid boder-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between  lg:flex-col lg:py-6 '>
        <span> {new Date().getFullYear()} &copy; all right reserved </span>
        <div className='flex items-center lg:py-2'>
        Build with <span className='text-primary dark:text-primaryDark text-2xl px-1 '>&#9825;</span>By&nbsp;<Link href='https://github.com/Saurabh0142' target='_blank' className='underline underline-offset-2'>Saurabh</Link>
        </div>
        <Link href='mailto:saurabh17again@gmail.com' target={"_blank"} className='underline underline-offset-2'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
