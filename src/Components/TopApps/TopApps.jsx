import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { NavLink, useLoaderData } from 'react-router';
import TopApp from '../TopApp/TopApp';

const TopApps = () => {

    const topAppData = useLoaderData();

    return (
        <>
            <section className='bg-[#f5f5f5] px-5 py-5 md:px-[30px] md:py-[30px] lg:px-[50px] lg:py-[50px] xl:px-20 xl:py-20'>
                <SectionHeading
                    title='Trending Apps'
                    subtitle='Explore All Trending Apps on the Market developed by us'
                ></SectionHeading>

                <div className='grid grid-cols-4 gap-6 mt-10'>
                    {
                        topAppData.map(topApp => <TopApp
                                                    key={topApp.id}
                                                    topApp={topApp}
                                                 ></TopApp>)
                    }
                </div>
                <div className='text-center'>
                    <NavLink to='/apps'>
                        <button className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] rounded text-white text-base font-semibold px-[40px] py-3 capitalize cursor-pointer mt-10'>
                            show all
                        </button>
                    </NavLink>
                </div>
            </section>
        </>
    );
};

export default TopApps;