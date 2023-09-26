import React from 'react';
import DonationCard from './DonationCard';

const Donations = ({donations}) => {

    // console.log(donations);


    return (
        <div className="py-10 lg:max-w-[1300px] mx-auto">
            <h1 className="text-black text-5xl font-bold text-center">Donations</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 my-10">
                {
                    donations?.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donations;