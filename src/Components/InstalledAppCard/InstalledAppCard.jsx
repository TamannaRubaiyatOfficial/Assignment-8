import React from 'react';
import { formatDownloadNum } from '../../Utilities/formatDownloadNum';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Download } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router';
// import { getStoredData } from '../../Utilities/addToStorage';

const InstalledAppCard = ({ filteredApp, handleUninstall }) => {

    const { id, image, title, size, ratingAvg, downloads } = filteredApp;

    const handleUninstallApps = (id) => {
        toast('app uninstalled');
        handleUninstall(id);
    }

    return (
        <>
            <div className='p-4 rounded bg-white my-4 flex justify-between items-center'>
                <div className='flex justify-start items-stretch gap-4'>

                    <div className='w-[80px] h-[80px] rounded-lg overflow-hidden shadow-lg'>
                        <img className='w-full object-cover' src={image} alt={title} />
                    </div>

                    <div>

                        <h3 className='text-[20px] font-medium text-[#001931] capitalize'>{title}</h3>

                        <ul className='flex justify-start items-center gap-4 mt-4'>
                            <li className='text-[#00D390] font-medium text-base uppercase flex justify-between items-center gap-1'>
                                <span> <Download size={16} /></span>
                                <span>{formatDownloadNum(downloads)}</span>
                            </li>
                            <li className='text-[#FF8811] font-medium text-base uppercase flex justify-between items-center gap-1'>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span>{ratingAvg}</span>
                            </li>
                            <li className='text-[#627382] font-medium text-base uppercase'>{size}MB</li>
                        </ul>

                    </div>

                </div>

                <div>
                    <NavLink to='/installation'>
                        <button onClick={() => handleUninstallApps(id)} className='px-4 py-3 bg-[#00D390] rounded text-white text-base font-semibold capitalize cursor-pointer'>
                            uninstall
                        </button>
                    </NavLink>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default InstalledAppCard;