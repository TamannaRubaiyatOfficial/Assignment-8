import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown';

const States = () => {
    return (
        <>
            <section className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] p-5 md:p-[30px] lg:p-[50px] xl:p-20 text-white'>
                <h3 className='text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-center'>Trusted by Millions, Built for You</h3>

                <div className='flex flex-col md:flex-row justify-evenly items-center lg:gap-4 xl:gap-6'>
                    <div className='mt-5 md:mt-10 flex justify-center items-center gap-0 xl:gap-2'>
                        <div className='text-center'>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>Total Downloads</p>
                            <h3 className='text-[30px] lg:text-[50px] xl:text-[64px] leading-[30px] lg:leading-[72px] py-1 uppercase font-extrabold'>29.6M</h3>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>21% more than last month</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-[30px] lg:text-[50px] xl:text-[80px]' icon={faCloudArrowDown} />
                        </div>
                    </div>

                    <div className='mt-10 flex justify-center items-center gap-2'>
                        <div className='text-center'>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>Total Reviews</p>
                            <h3 className='text-[30px] lg:text-[50px] xl:text-[64px] leading-[30px] lg:leading-[72px] py-1 uppercase font-extrabold'>906K</h3>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>46% more than last month</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-[30px] lg:text-[50px] xl:text-[80px]' icon={faStar} />
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center items-center gap-2'>
                        <div className='text-center'>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>Active Apps</p>
                            <h3 className='text-[30px] lg:text-[50px] xl:text-[64px] leading-[30px] lg:leading-[72px] py-1 uppercase font-extrabold'>132+</h3>
                            <p className='text-[12px] lg:text-base capitalize font-normal opacity-80'>31 more will Launch</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-[30px] lg:text-[50px] xl:text-[80px]' icon={faGooglePlay} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default States;