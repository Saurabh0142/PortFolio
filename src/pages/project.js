import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import project1 from "../../public/images/projects/webpage.png"
import project2 from "../../public/images/projects/coursemanagement.png"
import project3 from "../../public/images/projects/FlixShow.png"
import project4 from "../../public/images/projects/tablue.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage=motion(Image);

const FeaturedProject=({type, title,summary,img ,link, github})=>{
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border-solid 
         border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
         '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
            
            />

            <Link
             href={link}
             target='_blank' 
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>

            <FramerImage src={img} alt={title} className="w-full  h-auto" 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10 '> <GithubIcon/> </Link> 
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark sm:px-4 sm:text-base
                '> visit project </Link>
                </div>

            </div>
        </article>
    )
}

const Project=({title ,type,img,link,github})=>{
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>
            
            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className="w-full  h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark 
                lg:text-lg md:text-base
                '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>


                <Link href={link} target='_blank'
                className='text-lg font-semibold hover:underline md:text-base'>
                 visit </Link>
                <Link href={github} target='_blank' className='w-8 animate-pulse md:w-6'> <GithubIcon/> </Link> 

                
                </div>

            </div>
        </article>
    )
}

const project = () => {
  return (
    <>
    <Head>
        <title> Sauarbhyadav | Project Page </title>
        <meta name='description ' content='any description '/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-16'>
            <AnimatedText text={"Imagination triuph Knowledge"}
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
                <FeaturedProject 
                title="Portfolio Websites with NextJS"
                img={project1}
                summary="Developed a professional portfolio website using cutting-edge web
                technologies to showcase my skills, projects, and achievements.•Leveraging the power of Next.js, Tailwind CSS, and Framer Motion, I created an
                immersive and dynamic user experience.                
                "
                link="https://master--courageous-jalebi-cc3901.netlify.app/"
                github={'https://github.com/Saurabh0142'}
                type="FeaturedProject"
                
                
                
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                title="Course Management"
                img={project2}
                summary="It is a React app , Which is used to Manage or to Add Courses in list ,So you can easily manage your courses on workplace.
Course Management Web Application: Developed a comprehensive course management system using React.js for the
frontend and Spring Boot for the backend. Technology used like React Js , SpringBoot , SpringToolSuite ,Javascript,ReactStrap.
"
                link="https://github.com/Saurabh0142/Courses_Management"
                github={'https://github.com/Saurabh0142/Courses_Management'}
                type="FeaturedProject"
                
                
                
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                title="Flix Show"
                img={project3}
                summary="Developed a Full Stack flix show using cutting-edge technologies, including React,Developed a Full Stack flix show using cutting-edge technologies, including React,
Tailwind CSS, Next.JS, Prisma, MongoDB, and NextAuth, with deployment on Vercel.Led the front-end development, implementing a dynamic and responsive user interface with React and leveraging Tailwind
CSS for efficient styling.Engineered the back-end logic with Next.JS and employed Prisma as the database ORM for seamless communication with
MongoDB.Integrated NextAuth for secure user authentication, ensuring a robust authentication system.



"
                link="https://netflic-clone-3hu1blelr-saurabhs-projects-77336e3f.vercel.app/auth"
                github={'https://github.com/Saurabh0142/Netflic-clone'}
                type="FeaturedProject"
                
                
                
                />
            </div>
            <div className='col-span-12'>
            <FeaturedProject 
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github={'/'}
                type="FeaturedProject"
                
                
                
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                title="Sales Dashboard Creation using Tableau"
                img={project4}
                summary="•Design an interactive Tableau dashboard using a hypothetical sales dataset, including transactions, product details, customer
demographics, and regional info.Clean and structure the dataset for efficient use in Tableau, ensuring optimal analysis.Include key performance indicators (KPIs), bar charts, line graphs, heatmaps, and pie charts to visualize sales trends, product
performance, customer behavior, and regional distribution.
"
                link="/"
                github={'/'}
                type="FeaturedProject"
                
                
                
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github={'/'}
                type="FeaturedProject"
                
                
                
                />
            </div>



            </div>
        </Layout>
    </main>
    
    </>
  )
}

export default project
