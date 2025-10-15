import { Download } from 'lucide-react';
import React from 'react';
import { formatDownloadNum } from '../../Utilities/formatDownloadNum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const TopApp = ({ topApp }) => {

    const { id, image, title, downloads, ratingAvg } = topApp;

    return (
        <>
            <Link to={`/appDetails/${id}`}>
                <div className='bg-white rounded p-4 hover:translate-y-[-10px] transition-all duration-[0.3s] hover:shadow-lg cursor-pointer'>
                    <div className='h-[316px] rounded overflow-hidden'>
                        <img className='w-full h-full object-cover object-center' src={image} alt={title} />
                    </div>
                    <h3 className='text-[20px] font-medium capitalize text-[#001931] my-4'>{title}</h3>
                    <div className='flex justify-between items-center'>
                        <div className='bg-[#F1F5E8] px-[10px] py-[6px] rounded flex justify-between items-center text-[#00D390] font-medium text-base uppercase gap-2'>
                            <span> <Download /></span>
                            <span>{formatDownloadNum(downloads)}</span>
                        </div>
                        <div className='bg-[#FFF0E1] px-[10px] py-[6px] rounded flex justify-between items-center text-[#FF8811] font-medium text-base uppercase gap-2'>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <span>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default TopApp;