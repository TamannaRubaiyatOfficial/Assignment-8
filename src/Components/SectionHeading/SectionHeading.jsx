import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
    return (
        <>
            <div className='text-center'>
                <h3 className='text-4xl font-bold text-[#001931] capitalize'>{title}</h3>
                <p className='mt-4 text-[20px] leading-8 text-[#627382]'>{subtitle}</p>
            </div>
        </>
    );
};

export default SectionHeading;