import React from 'react';
import Icon from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footerContainer bg-[#001931] px-5 md:px-[30px] py-[20px] lg:px-[50px] xl:px-20 lg:py-[35px]'>
                <div className='text-white text-base flex flex-wrap md:flex-nowrap justify-evenly md:justify-between items-start gap-4 md:gap-6'>

                    {/* column 1 */}
                    <div className='w-[100%] text-center md:text-left md:w-[50%]'>
                        <div className='flex justify-center md:justify-start items-center gap-1'>
                            <div className='w-[10%]'>
                                <img className='w-full' src={Icon} alt="Footer Logo" />
                            </div>
                            <h3 className='uppercase text-[20px] font-bold'>hero.io</h3>
                        </div>
                        <p className='mt-3'>
                            At HERO.IO, we believe technology should simplify life and inspire creativity. Our team is passionate about building innovative applications that empower users every day. From concept to launch, we focus on delivering impactful digital experiences. We value quality, design, and user satisfaction above all. Join us on our mission to make technology smarter, easier, and more exciting for everyone.
                        </p>
                    </div>

                    {/* column 2 */}
                    <div className='md:w-[15%]'>
                        <h3 className='capitalize text-[20px] font-semibold'>company</h3>
                        <ul>
                            <li className='cursor-pointer capitalize mt-3'>about us</li>
                            <li className='cursor-pointer capitalize mt-3'>our apps</li>
                            <li className='cursor-pointer capitalize mt-3'>career</li>
                            <li className='cursor-pointer capitalize mt-3'>contact</li>
                        </ul>
                    </div>

                    {/* column 3 */}
                    <div className='md:w-[15%]'>
                        <h3 className='capitalize text-[20px] font-semibold'>resources</h3>
                        <ul>
                            <li className='cursor-pointer capitalize mt-3'>blog</li>
                            <li className='cursor-pointer capitalize mt-3'>help center</li>
                            <li className='cursor-pointer capitalize mt-3'>privacy policy</li>
                            <li className='cursor-pointer capitalize mt-3'>terms & conditions</li>
                        </ul>
                    </div>

                    {/* column 4 */}
                    <div className='md:w-[20%]'>
                        <h3 className='capitalize text-[20px] font-semibold'>social links</h3>
                        <ul className='flex justify-start items-center gap-[10px]'>
                            <li className='hover:scale-[1.05] transition-transform duration-[0.3s] cursor-pointer mt-3 text-[24px]'>
                                <a href="https://www.facebook.com/programmingHero/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className='hover:scale-[1.05] transition-transform duration-[0.3s] cursor-pointer mt-3 w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center'>
                                <a href="https://x.com/programminghero?lang=bn" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='text-black text-[16px]' icon={faXTwitter} />
                                </a>
                            </li>

                            <li className='hover:scale-[1.05] transition-transform duration-[0.3s] cursor-pointer mt-3 w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center'>
                                <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className=' text-black text-[16px]' icon={faYoutube} />
                                </a>
                            </li>

                            <li className='hover:scale-[1.05] transition-transform duration-[0.3s] cursor-pointer mt-3 w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center'>
                                <a href="https://www.instagram.com/programminghero/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='text-black text-[16px]' icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-white text-base font-normal text-center pt-3'>Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;