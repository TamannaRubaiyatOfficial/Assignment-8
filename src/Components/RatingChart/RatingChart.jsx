import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingChart = ({ratings}) => {
    // const data = ratings;

    const sortedRatings = [...ratings].sort((a, b) => {

        const aValue = parseInt(a.name);
        const bValue = parseInt(b.name);
        return bValue - aValue;
    });

    return (
        <>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout='vertical' data={sortedRatings} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                        <XAxis type='number' tick={{fontSize: 18, lineHeight: 16, fontWeight: 'regular', color: '#627382', textTransform: 'capitalize'}} />
                        <YAxis type='category' dataKey="name" tick={{fontSize: 18, lineHeight: 16, fontWeight: 'regular', color: '#627382', textTransform: 'capitalize'}} />
                        <Tooltip wrapperStyle={{ width: '200px', border: '1px solid #d5d5d5', borderRadius: 3 }} />
                        <Legend width={100} wrapperStyle={{ bottom: 0, right: '50%', backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <Bar dataKey="count" fill="#FF8811" barSize={32} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default RatingChart;