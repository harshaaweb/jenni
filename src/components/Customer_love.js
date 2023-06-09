import React from 'react';
import ai_assistant from './images/ai_assistant.webp';
import mushtaq from './images/mushtaq.webp';
import rosh from './images/rosh.webp';
import takumi from './images/takumi.jpg';
import xavier from './images/xavier.webp';
import oscar from './images/oscar.webp';
import liyen from './images/liyen.webp';

export default function Customer_love() {
  return (
    <div className='px-4 pt-[80px] bg-[#FAFAFC]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-yellow-500 font-bold text-center'>CUSTOMER LOVE</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Join our community today!</p>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>AI Scribbler is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels</p>
            </div>
            <div className='lg:flex flex-wrap items-stretch  my-10 max-w-[1100px] mx-auto'>
                <div className='lg:w-1/3 md:flex p-4 lg:block'>
                    <div className='md:w-1/2 lg:w-full p-8 shadow-lg rounded-xl flex h-full'>
                        <p className='text-[16px] font-medium leading-[20px] text-center w-full'>GO WITH AI SCRIBBLER HIGHLY RECOMMENDED. I HAVE TRIED A FEW AI COPYWRITING APPS BUT SO FAR SCRIBBLER IS THE BEST</p>
                    </div>
                </div>
                <div className='lg:w-1/3 md:flex p-4 lg:block'>
                    <div className='md:w-1/2 lg:w-full p-8 shadow-lg rounded-xl flex h-full'>
                        <p className='text-[16px] font-medium leading-[20px] text-center w-full'>AI Scribbler is a fantastic tool for writing product descriptions and getting started on blog posts. No longer do I have to stare at a blank screen trying to figure out how to flesh out a topic beyond 50 words.</p>
                    </div>
                    <div className='md:w-1/2 lg:w-full p-8 shadow-lg rounded-xl hidden'>
                        <div className='grow-0 shrink-0 h-[40px] w-[40px] rounded-full overflow-hidden bg-[#FFAA22]'>
                            <img src={xavier} alt="" className='h-full w-full'/>
                        </div>
                        <div className='grow shrink ml-2 mr-1'>
                            <div className='flex items-center'>
                                <p className='text-[12px] font-medium leading-[12px]'>Xavier</p>
                                <p className='text-[12px] text-[#ababab]'>&nbsp;&#64;xaviercaffrey13,</p>
                                <p className='text-[12px] text-[#ababab]'>&nbsp;19 Aug</p>
                            </div>
                            <p className="text-[12px] text-[#333] mt-1 tracking-tighter">Copyai is alright but have you tried  <span className='text-[#19e]'>@whoisscribblerai</span>?</p>
                        </div>
                        <div className='grow-0 shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1199EE" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3 md:flex p-4 lg:block'>
                    <div className='md:w-1/2 lg:w-full p-8 shadow-lg rounded-xl flex h-full'>
                        <p className='text-[16px] font-medium leading-[20px] text-center w-full'>With AI Content Creation, you can generate high-quality, engaging content across various mediums, including articles, blog, social media posts, and more with ease.</p>
                    </div>
                    <div className='md:w-1/2 lg:w-full p-8 shadow-lg rounded-xl hidden'>
                        <div className='grow-0 shrink-0 h-[40px] w-[40px] rounded-full overflow-hidden bg-[#FFEE66]'>
                            <img src={liyen} alt="" className='h-full w-full'/>
                        </div>
                        <div className='grow shrink ml-2 mr-1'>
                            <div className='flex items-center'>
                                <p className='text-[12px] font-medium leading-[12px]'>Liyen Tan</p>
                                <p className='text-[12px] text-[#ababab]'>&nbsp;&#64;theliyentan,</p>
                                <p className='text-[12px] text-[#ababab]'>&nbsp;PhD.</p>
                                <p className='text-[12px] text-[#ababab]'>&nbsp;25 Mar</p>
                            </div>
                            <p className="text-[12px] text-[#333] mt-1 tracking-tighter">Lost for words when I saw how perfectly this caption was written by <span  className='text-[#19e]'>@whoisscribblerai</span></p>
                        </div>
                        <div className='grow-0 shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1199EE" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </div>
  )
}
