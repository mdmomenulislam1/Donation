import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../../Components/Donations/DonationCard';
import DonatedCard from '../../Components/Donations/Donated/DonatedCard';


const Donation = () => {



    const [Donated, setDonated] = useState([]);

    const [empty, setEmpty] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [totalDonation, setTotalDonation] = useState(0)



    useEffect(() => {
        const DonatedItem = JSON.parse(localStorage.getItem('Donated'));

        if (DonatedItem) {
            setDonated(DonatedItem);

            const total = DonatedItem.reduce((preDonation, currentDonation) => preDonation + currentDonation.price, 0)

            setTotalDonation(total.toFixed(2));
        }
        else {
            setEmpty('No data Available')
        }

    }, [])


    const handleRemove = () => {
        localStorage.clear()
        setDonated([])
        setEmpty('No data Available')
    }

    return (
        <div className="lg:max-w-[1300px] mx-auto px-10 lg:px-0">

            {
            Donated.length > 0 && 
            <div className="flex flex-col lg:flex-row justify-between my-5 ">
                <button onClick={handleRemove} className="hover:bg-black p-4 font-semibold rounded bg-purple-950 text-white">Delete All Donations </button>
                <h1 className="text-4xl font-bold">Total Donation: ${totalDonation}</h1>
            </div>
            }

            <div className="">
                {empty ? <p className="flex justify-center items-center py-20 text-4xl font-bold">No Data Found</p> : <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        {
                            isShow ? Donated.map(donation => (
                                <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                            ))
                                : Donated.slice(0, 4).map(donation => (
                                    <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                                ))
                        }



                    </div>
                    {
                        Donated.length > 4 && <button onClick={() => setIsShow(!isShow)} className="hover:bg-black my-20 btn mx-auto bg-purple-950 block text-white">
                            {isShow ? "Show Less" : "Show More"}
                        </button>
                    }

                </div>}

            </div>


        </div>
    );
};

export default Donation;