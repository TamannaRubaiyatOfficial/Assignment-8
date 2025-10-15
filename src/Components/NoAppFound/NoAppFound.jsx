import React from 'react';
import appError from '../../assets/App-Error.png'


const NoAppFound = ({onGoBack}) => {

    return (
        <>
            <div className='col-span-4 text-center'>
                <div className='w-[35%] mx-auto mt-4 mb-7'>
                    <img className='w-full' src={appError} alt="App Not Found" />
                </div>
                <h2 className='text-5xl leading-[60px] font-semibold text-[#001931] uppercase'>OPPS!! APP NOT FOUND</h2>
                <p className='text-[20px] leading-8 font-normal text-[#627382] mt-2 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={onGoBack} className='px-3 py-2 md:px-5 md:py-3 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-base font-semibold capitalize cursor-pointer hover:shadow-lg duration-[0.3s] transition-all'>
                    Go Back!
                </button>
            </div>
        </>
    );
};

export default NoAppFound;