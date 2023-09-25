import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../../Components/Donations/DonationCard';
import DonatedCard from '../../Components/Donations/Donated/DonatedCard';


const Donation = () => {



    const [Donated, setDonated] = useState([]);

    const [empty, setEmpty] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const 



    useEffect(() => {
        const DonatedItem = JSON.parse(localStorage.getItem('Donated'))
        if (DonatedItem) {
            setDonated(DonatedItem)
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
        <div>

            {Donated.length > 0 && <button onClick={handleRemove} className="hover:bg-black my-20 btn mx-auto bg-purple-950 block text-white">Delete All Donations </button>}

            <div className="">
                {empty ? <p className="flex justify-center items-center py-20 text-4xl font-bold">No Data Found</p> : <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        {
                            isShow ? Donated.map(donation => (
                                    <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                                ))
                                :Donated.slice(0,4).map(donation =>(
                                    <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                                ))
                        }
                        


                    </div>
                    {
                        Donated.length > 4 && <button onClick={() => setIsShow(!isShow)} className="hover:bg-black my-20 btn mx-auto bg-purple-950 block text-white">
                        {isShow?"Show Less":"Show More"}
                    </button>
                    }

                </div>}

            </div>

            
        </div>
    );
};

export default Donation;