"use client";


import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SiLeetcode } from "react-icons/si";


export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section
            ref={ref} id='home'
            className='relative mb-28 max-w-[50rem] text-center 
        sm:mb-0 scroll-mt-[100rem] overflow-hidden'
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/photo.png" alt="Prem"
                            width="320"
                            height="320"
                            quality="95"
                            priority={true}
                            className='h-40 w-40 rounded-full object-cover 
                        border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500
                        shadow-2xl ring-4 ring-purple-200 ring-opacity-50
                        hover:scale-105 transition-transform duration-300'
                        />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl 
            font-medium !leading-[1.5] 
            sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-handwriting text-5xl sm:text-6xl gradient-text-warm font-bold'>Hello, I'm Prem.</span>
                <br className='block sm:hidden' />
                <span className='font-inter'> I'm a </span>
                <span className='font-playfair font-bold gradient-text text-3xl sm:text-5xl'>law student</span>
                <span className='font-inter'> with a passion for </span>
                <span className='font-mono italic gradient-text-cool font-semibold'>web development</span>
                <span className='font-inter'>. I enjoy combining </span>
                <span className='font-playfair font-bold text-purple-600 dark:text-purple-400'>analytical thinking</span>
                <span className='font-inter'> with creative coding to build interactive websites. When I'm not studying or coding, I love </span>
                <span className='font-handwriting text-2xl sm:text-3xl underline decoration-wavy decoration-pink-500'>playing Chess and gaming</span>
                <span className='font-inter'>.</span>
            </motion.h1>
            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center 
            gap-4 
            px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <a
                    className='group bg-gradient-to-r from-purple-500 to-pink-500 
                    text-white px-7 py-3 flex 
                items-center gap-2 font-inter font-semibold
                rounded-full outline-none focus:scale-110 hover:scale-110
                hover:from-purple-600 hover:to-pink-600 active:scale-105
                transition-all duration-300 shadow-lg hover:shadow-xl
                cursor-pointer'
                    href='/myResume.pdf'
                    download
                >
                    <span className='font-playfair'>Download CV</span>
                    <HiDownload
                        className='opacity-80 group-hover:translate-y-1 
                    transition-transform duration-300'
                    />
                </a>
                <a
                    className='bg-white p-4 text-gray-700 flex items-center 
                gap-2 rounded-full 
                outline-none focus:scale-[1.15] 
                hover:scale-[1.15] hover:text-gray-950 active:scale-105
                transition borderBlack dark:bg-white/10 dark:text-white/60'
                    href='#' target='_blank'
                >
                    <BsLinkedin />
                </a>
                <a
                    className='bg-white p-4 text-gray-700 flex items-center 
                gap-2 rounded-full outline-none 
                focus:scale-[1.15] hover:scale-[1.15] 
                hover:text-gray-950 active:scale-105
                transition borderBlack dark:bg-white/10 dark:text-white/60'


