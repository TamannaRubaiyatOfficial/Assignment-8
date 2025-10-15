import React, { useState } from 'react';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import { useLoaderData } from 'react-router';
import SingleApp from '../../Components/SingleApp/SingleApp';
import NoAppFound from '../../Components/NoAppFound/NoAppFound';

const Apps = () => {

    const appData = useLoaderData();

    const [searchApp, setSearchApp] = useState('');
    const filteredApp = appData.filter(app => app.title.toLowerCase().includes(searchApp.toLowerCase()));

    const handleSearchInput = (e) => {
        setSearchApp(e.target.value);
        console.log(searchApp);
    }

    return (
        <>
            <section className='bg-[#f5f5f5] p-5 md:p-[30px] lg:p-[50px] xl:p-20'>
                <div>
                    <SectionHeading
                        title="Our All Applications"
                        subtitle="Explore All Apps on the Market developed by us. We code for Millions"
                    ></SectionHeading>
                </div>

                <div className='mt-10 mb-6 flex justify-between items-center'>
                    <div className='flex-1'>
                        <h3 className='text-[24px] leading-8 font-semibold text-[#001931] capitalize'>({filteredApp.length}) Apps Found</h3>
                    </div>

                    <label className="input bg-transparent border border-[#D2D2D2] rounded">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search apps" className='placeholder:capitalize' value={searchApp} onChange={handleSearchInput} />
                    </label>
                </div>

                <div className='grid grid-cols-4 gap-6'>
                    {
                        (filteredApp.length > 0) ?
                            filteredApp.map(app => <SingleApp
                                key={app.id}
                                app={app}
                            ></SingleApp>) :
                            <NoAppFound onGoBack={() => setSearchApp('')}></NoAppFound>
                    }
                </div>
            </section>
        </>
    );
};

export default Apps;