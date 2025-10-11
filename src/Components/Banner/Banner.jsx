import React from 'react';
import heroImg from '../../assets/hero.svg'
import googlePlayIcon from '../../assets/google-play-icon.svg'
import appStoreIcon from '../../assets/app-store-icon.svg'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section className='banner bg-[#f5f5f5] px-5 pt-5 md:px-[30px] md:pt-[30px] lg:px-[50px] lg:pt-[50px] xl:px-20 xl:pt-[80px]'>
                <div>
                    <h2 className='text-[40px] md:text-[50px] lg:text-[68px] xl:text-[72px] leading-[50px] md:leading-[60px] lg:leading-[78px] xl:leading-[84px] font-bold opacity-90 text-[#001931] capitalize text-center'>We Build <br /><span className='hero-h2-gradient'>Productive</span> Apps</h2>
                    <p className='mt-4 mb-10 text-[16px] md:text-[18px] lg:text-[20px] text-[#627382] leading-5 md:leading-6 lg:leading-8 font-normal text-center w-full md:w-[82%] xl:w-[70%] mx-auto'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mb-10'>
                        <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
                            <button className='px-5 py-2 md:px-5 md:py-[10px] xl:px-6 xl:py-3 border border-[#D2D2D2] box-border rounded flex justify-between items-center gap-[10px] cursor-pointer capitalize text-[20px] font-semibold text-[#001931] hover:shadow-xl transition-all duration-[0.3s]'>
                                <span><img src={googlePlayIcon} alt="Google play icon" /></span>
                                <span>google play</span>
                            </button>
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <button className='px-5 py-2 md:px-5 md:py-[10px] xl:px-6 xl:py-3 border border-[#D2D2D2] box-border rounded flex justify-between items-center gap-[10px] cursor-pointer capitalize text-[20px] font-semibold text-[#001931] hover:shadow-xl transition-all duration-[0.3s]'>
                                <span><img src={appStoreIcon} alt="App store icon" /></span>
                                <span>app store</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-full lg:w-[75%] xl:w-[60%] mx-auto'>
                    <img className='w-full' src={heroImg} alt="Hero BG Image" />
                </div>
            </section>
        </>
    );
};

export default Banner;