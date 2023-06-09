import React from 'react';
import Navbar from './Navbar';
import profile1 from './images/profile1.webp';
import profile2 from './images/profile2.webp';
import profile3 from './images/profile3.webp';
import profile4 from './images/profile4.webp';
import Video from './Video';
import Footer from './Footer';
import Univ_and_corp from './Univ_and_corp';
import Powerful_features from './Powerful_features';
import Ai_assistant from './Ai_assistant';
import Customer_love from './Customer_love';
import Use_cases from './Use_cases';
import Support from './Support';
import Try_jenny from './Try_jenny';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className='pt-[150px] px-4'>
            <div className='flex items-center justify-center text-[24px] leading-[30px]  sm:text-[46px] sm:leading-[51px] md:text-[57px] md:leading-[63px] font-extrabold text-center w-full'>
                <div className='flex items-center justify-center flex-wrap tracking-tighter text-center'>
                    <p className='text-center'>SAY HELLO!</p>
                    <p className='bg-gradient-to-r from-[#3F1D96] to-[#7755CC] bg-clip-text text-transparent pr-2'>&nbsp;ITS AI SCRIBBLER</p>
                    {/* <p className='text-center'>FASTER WITH AI.</p> */}
                    
                </div>
            </div>
            <div className='flex justify-center mt-6'>
                <p className='text-[#555] text-[22px] leading-[31px] text-center w-[600px]'>CREATE AMAZING CONTENT, POSTS 10X FASTER WITH AI SCRIBBLER</p>
            </div>
            <div  className='flex justify-center mt-10'>
                <Link to="/register">
                    <button className='rounded-xl text-[20px] sm:text-[24px] text-white font-semibold px-5 py-3 bg-green-600  hover:outline outline-[5px] outline-green-200 hover:transition-all'>Start writing for free</button>
                </Link>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='flex items-center flex-wrap justify-center'>
                    <div className='hidden items-center'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white'>
                            <div className='w-[26px] h-[26px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${profile1})`}}></div>
                        </div>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white relative left-[-10px]'>
                            <div className='w-[26px] h-[26px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${profile2})`}}></div>
                        </div>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white relative left-[-20px]'>
                            <div className='w-[26px] h-[26px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${profile3})`}}></div>
                        </div>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white relative left-[-30px]'>
                            <div className='w-[26px] h-[26px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${profile4})`}}></div>
                        </div>
                    </div>
                    <p className='text-[14px] leading-[22px] text-[#555] relative left-[-10px]'>Join writers using AI Scribbler</p>
                </div>
            </div>
        </div>
        <div className=''><Video/></div>
        {/* <div className="max-w-[1250px] m-auto"><Univ_and_corp/></div> */}
        <Powerful_features/>
        <Ai_assistant/>
        <Customer_love/>
        <Use_cases/>
        <Support/>
        <Try_jenny/>
        <Footer/>
    </div>
  )
}
