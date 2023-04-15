import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Try_jenny from './Try_jenny';
import c1 from './images/blog_img/c1.webp';
import c2 from './images/blog_img/c2.webp';
import { tick } from './Svg';

export default function Pricing() {
  return (
    <div>
        <Navbar/>
        <div className='px-4 pt-[80px] bg-[#FAFAFC]'>
          <div className='pt-[60px]'>
            <p className='text-center text-[30px] leading-[35px] sm:text-[57px] sm:leading-[63px] font-extrabold text-[#0a001f]'>Simple, scalable pricing</p>
            <p className='text-center text-[22px] leading-[31px] text-[#555] mt-5'>No credit card required, cancel anytime</p>

            <div className='mt-12'>
              <div className='flex justify-center'>
                <div className='flex items-center text-[12px] leading-[24px] rounded-full p-[2px] border border-green-600'>
                  <div className='text-white rounded-full px-3 py-[1px] bg-green-600 cursor-pointer'>Monthly</div>
                  <div className='text-[#4b5563] rounded-full px-3 py-[1px] cursor-pointer'>Annually</div>
                </div>
              </div>
              <div className='max-w-[1000px] mx-auto flex items-stretch mt-8'>
                <div className='w-1/3 p-3'>
                  <div className='rounded-xl border p-8 h-full flex flex-col justify-between'>
                    <p className='text-[20px] leading-[24px] text-[#191E29] font-semibold'>Free plan</p>
                    <div className='mt-5'>
                      <ul>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate 10k* characters per month</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 40+ use-cases</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Write in 30+ languages</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 20+ tones</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Built in plagiarism checker</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access to premium community</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate upto 5 images per month with A</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                    <div className='flex items-center justify-center mt-5'>
                      <p className='text-[36px] text-[#101826] font-bold text-center'>Free</p>
                      {/* <p className='p-0 text-[#586271] text-[13px] font-medium'>&nbsp;/month</p> */}
                    </div>
                    <p className='text-[14px] leading-[16px] text-[#8E9295] mb-6 text-center'>Upgrade as you scale</p>
                    <button className='w-full h-[40px] leading-[40px] font-semibold rounded-md text-center border border-green-600 text-green-600 hover:text-white text-[13px] hover:bg-green-600 hover:transition-all'>Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 p-3'>
                  <div className='rounded-xl border p-8 flex flex-col justify-between'>
                    <p className='text-[20px] leading-[24px] text-[#191E29] font-semibold'>Saver plan</p>
                    <div className='mt-5'>
                      <ul>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate 100k* characters per month</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 40+ use-cases</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Write in 30+ languages</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 20+ tones</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Built in plagiarism checker</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access to premium community</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate upto 20 images per month with A</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Create your own custom use- case</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                    <div className='flex items-center justify-center mt-5'>
                      <p className='text-[36px] text-[#101826] font-bold text-center'>$9</p>
                      <p className='p-0 text-[#586271] text-[13px] font-medium'>&nbsp;/month</p>
                    </div>
                    <p className='text-[14px] leading-[16px] text-[#8E9295] mb-6 text-center'>&90/year (<i>Get 2 months free!</i>)</p>
                    <button className='w-full h-[40px] leading-[40px] font-semibold rounded-md text-center border border-green-600 text-green-600 hover:text-white text-[13px] hover:bg-green-600 hover:transition-all'>Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 p-3'>
                  <div className='rounded-xl border p-8 flex flex-col justify-between'>
                    <p className='text-[20px] leading-[24px] text-[#191E29] font-semibold'>Unlimited plan</p>
                    <div className='mt-5'>
                      <ul>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate UNLIMITED+ characters per month</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 40+ use-cases</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Write in 30+ languages</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access 20+ tones</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Built in plagiarism checker</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Access to premium community</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Generate upto 100 images per month with A</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Dedicated account manager</p>
                          </div>
                        </li>
                        <li>
                          <div className='flex items-center'>
                            <div className='shrink-0'>{tick}</div>
                            <p className='text-[#666D73] text-[15px] ml-3 font-medium'>Priority email & chat support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                    <div className='flex items-center justify-center mt-5'>
                      <p className='text-[36px] text-[#101826] font-bold text-center'>$29</p>
                      <p className='p-0 text-[#586271] text-[13px] font-medium'>&nbsp;/month</p>
                    </div>
                    <p className='text-[14px] leading-[16px] text-[#8E9295] mb-6 text-center'>$290/year <i>(Get 2 months free!)</i></p>
                    <button className='w-full h-[40px] leading-[40px] font-semibold rounded-md text-center border border-green-600 text-green-600 hover:text-white text-[13px] hover:bg-green-600 hover:transition-all'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[1250px] mx-auto pt-[70px]'>
              <p className='text-[14px] leading-[21px] text-[#1199EE] font-bold text-center'>CUSTOMER LOVE</p>
              <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Reviews</p>
              <div className='flex justify-center'>
                  <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>Kind words from Jenni customers across the 🌎 </p>
              </div>
              <div className='md:flex gap-4 mt-12 max-w-[1250px] m-auto'>
                  <div className='md:w-1/2 bg-white rounded-xl py-5 px-7 shadow-md'>
                      <p className='text-[#555] text-[22px] leading-[31px] mt-3'>“This has been incredible, I actually nickname it magic. For someone studying abroad in the USA I can finally feel confident writing papers.”</p>
                      <div className='flex items-center mt-4'>
                        <div className='w-[50px] h-[50px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${c1})`}}></div>
                        <div className='ml-3'>
                          <p className='text-[24px] leading-[34px] font-semibold'>Rachel Liu</p>
                          <p className='text-[18px] leading-[25px] font-[#777]'>MSc BioScience Student</p>
                        </div>
                      </div>
                  </div>
                  <div className='md:w-1/2 bg-white rounded-xl py-5 px-7 shadow-md mt-4 md:mt-0'>
                      <p className='text-[#555] text-[22px] leading-[31px] mt-3'>“I have 4 writing assignments per week plus I run a newsletter. Jenni is a lifesaver that enables me to continue creating my best work in both.”</p>
                      <div className='flex items-center mt-4'>
                        <div className='w-[50px] h-[50px] rounded-full bg-cover bg-center' style={{backgroundImage:`url(${c2})`}}></div>
                        <div className='ml-3'>
                          <p className='text-[24px] leading-[34px] font-semibold'>Emile Rowe</p>
                          <p className='text-[18px] leading-[25px] font-[#777]'>Business MBA</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className='px-4 py-[80px] bg-[#FAFAFC]'>
            <div className='max-w-[1250px] m-auto'>
                <p className='text-[14px] leading-[21px] text-[#BB67CC] font-bold text-center'>SUPPORT</p>
                <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Frequently asked questions</p>
            </div>
            <div className='text-[] max-w-[1000px] mx-auto flex flex-wrap mt-5'>
                <div className='w-full sm:w-1/2 p-4'>
                    <p className='text-[20px] leading-[28px] font-bold'>Can I cancel my subscription at any time?</p>
                    <p className='text-[18px] leading-[25px] text-[#333] mt-4'>Yes, you can cancel your plan at any time. You will still have access to all documents previously created with Jenni.</p>
                </div>
                <div className='w-full sm:w-1/2 p-4'>
                    <p className='text-[20px] leading-[28px] font-bold'>How does the word count work?</p>
                    <p className='text-[18px] leading-[25px] text-[#333] mt-4'>We only ever count words that you accept from Jenni. If you don't like a generation and don't accept it, it is NOT added towards your word count 😊 </p>
                </div>
                <div className='w-full sm:w-1/2 p-4'>
                    <p className='text-[20px] leading-[28px] font-bold'>What kind of citations does Jenni make and how can I ensure the accuracy?</p>
                    <p className='text-[18px] leading-[25px] text-[#333] mt-4'>Jenni uses AI to find most relevant citations for your text. Choose between APA, MLA, Harvard and more.</p>
                </div>
                <div className='w-full sm:w-1/2 p-4'>
                    <p className='text-[20px] leading-[28px] font-bold'>What payment methods are available?</p>
                    <p className='text-[18px] leading-[25px] text-[#333] mt-4'>Our secure Stripe checkout supports all major credit cards.</p>
                </div>
            </div>
        </div>
        <Try_jenny/>
        <Footer/>
    </div>
  )
}
