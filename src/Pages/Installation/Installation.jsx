import React, { useState } from 'react';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import { getStoredData } from '../../Utilities/addToStorage';
import { useLoaderData } from 'react-router';
import InstalledAppCard from '../../Components/InstalledAppCard/InstalledAppCard';

const Installation = () => {
    const allAppData = useLoaderData();
    const installedApp = getStoredData();
    
    const [installedAppIds, setInstalledAppIds] = useState(installedApp);

    const filteredAppData = allAppData.filter(filteredApp => installedAppIds.map(id => parseInt(id)).includes(filteredApp.id));

    const handleUninstall = (id) => {
        const storedData = getStoredData();
        const filteredData = storedData.filter(data => parseInt(data) !== id);
        localStorage.setItem('appList', JSON.stringify(filteredData));
        setInstalledAppIds(filteredData);
    }

    return (
        <>
            <section className='bg-[#f5f5f5] p-5 md:p-[30px] lg:p-[50px] xl:p-20'>
                <SectionHeading
                    title="Your Installed Apps"
                    subtitle="Explore All Trending Apps on the Market developed by us"
                ></SectionHeading>

                <div>
                    <div>
                        <h3 className='text-2xl leading-8 text-[#001931] font-semibold capitalize'>{installedApp.length} Apps Found</h3>
                    </div>
                    <div></div>
                </div>

                <div>
                    {
                        filteredAppData.map(filteredApp => <InstalledAppCard
                            filteredApp={filteredApp}
                            key={filteredApp.id}
                            handleUninstall={handleUninstall}
                        ></InstalledAppCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default Installation;