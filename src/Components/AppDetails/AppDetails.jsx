import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { formatDownloadNum } from '../../Utilities/formatDownloadNum';
import RatingChart from '../RatingChart/RatingChart';
import downloadIcon from '../../assets/download-icon.svg'
import ratingIcon from '../../assets/rating-icon.svg'
import reviewIcon from '../../assets/review-icon.svg'
import { toast, ToastContainer } from 'react-toastify';
import { addStoredData, getStoredData } from '../../Utilities/addToStorage';
import AppError from '../../Pages/AppError/AppError';


const AppDetails = () => {
    const appDetails = useLoaderData();
    const { id } = useParams();
    const ID = parseInt(id);


    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedApps = getStoredData();
        if (installedApps.includes(id)) {
            setIsInstalled(true);
        }
    }, [id]);

    const handleInstallButton = () => {
        setIsInstalled(true);
        toast('App installed');
        addStoredData(id)
    }

    const singleApp = appDetails.find(app => app.id === ID);

    if (!singleApp) {
        return <AppError></AppError>
    }

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;


    return (
        <>
            <section className='bg-[#f5f5f5] p-5 md:p-[30px] lg:p-[50px] xl:p-20'>
                {/* container 1 */}
                <div className='flex justify-start items-stretch gap-20'>
                    <div className='w-1/4 '>
                        <img className='w-full object-cover shadow-[0_10px_20px_-12px_#0000001a]' src={image} alt={title} />
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-[32px] font-bold text-[#001931] capitalize'>{title}</h3>
                        <p className='mt-2 mb-[30px] text-[20px] text-[#627382] font-normal leading-8 capitalize'>Developed by <span className='gradient font-semibold'>{companyName}</span></p>

                        <hr className='text-[#001931] opacity-20' />

                        <div className='w-[40%] grid grid-cols-3 gap-6 my-[30px]'>
                            <div>
                                <span className='w-[50%] block'><img className='w-full' src={downloadIcon} /></span>
                                <span className='my-2 text-base text-[#001931] capitalize opacity-80'>downloads</span>
                                <h3 className='text-[40px] font-extrabold leading-10 uppercase text-[#001931]'>{formatDownloadNum(downloads)}</h3>
                            </div>
                            <div>
                                <span className='w-[50%] block'><img className='w-full' src={ratingIcon} /></span>
                                <span className='my-2 text-base text-[#001931] capitalize opacity-80'>Average Ratings</span>
                                <h3 className='text-[40px] font-extrabold leading-10 uppercase text-[#001931]'>{ratingAvg}</h3>
                            </div>
                            <div>
                                <span className='w-[50%] block'><img className='w-full' src={reviewIcon} /></span>
                                <span className='my-2 text-base text-[#001931] capitalize opacity-80'>Total Reviews</span>
                                <h3 className='text-[40px] font-extrabold leading-10 uppercase text-[#001931]'>{formatDownloadNum(reviews)}</h3>
                            </div>
                        </div>

                        <button disabled={isInstalled} onClick={handleInstallButton} className={`bg-[#00D390] rounded px-5 py-[14px] text-white text-[20px] font-semibold capitalize hover:shadow-2xl duration-[0.3s] transition-all cursor-pointer shadow-xl ${!isInstalled ? 'skeleton' : 'animate-none'}`}>
                            {
                                isInstalled ? `Installed` : `install now (${size} MB)`
                            }
                        </button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>

                <hr className='text-[#001931] opacity-20 my-10' />

                {/* container 2 */}
                <div>
                    <RatingChart ratings={ratings}></RatingChart>
                </div>

                <hr className='text-[#001931] opacity-20 my-10' />

                {/* container 3 */}
                <div>
                    <h3 className='text-[24px] leading-8 font-semibold capitalize text-[#001931]'>Description</h3>
                    <p className='mt-6 text-[20px] font-normal leading-8 text-[#627382]'>{description}</p>
                </div>
            </section>
        </>
    );
};

export default AppDetails;