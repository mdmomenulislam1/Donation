import React, { useRef } from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Donations from '../../Components/Donations/Donations';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../../Components/Donations/DonationCard';

const Home = () => {
    const donations = useLoaderData();
    const foodData = donations.filter(item => item.category === 'Food')
    const clothingData = donations.filter(item => item.category === 'Clothing')
    const educationData = donations.filter(item => item.category === 'Education')
    const healthData = donations.filter(item => item.category === 'Health')
    // console.log(foodData, clothingData, educationData,healthData);


    // const CategoryData = document.getElementById("category-data")
    // const category = CategoryData.value;
    // console.log(category);



    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current.value);
    };

    return (
        <div>
            <div className="h-[600px]">
                <div className="hero h-full" style={{ backgroundImage: "url('https://i.ibb.co/3yzZPYQ/Bg.png')" }} >
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center">
                            <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className="flex justify-center py-5">
                                <input ref={inputRef} name="category-data" id="category-data" className="text-center rounded-s-2xl w-full font-semibold text-black" type="text" placeholder="Category Name" />
                                <button onClick={handleClick} className="p-5 rounded w-36 bg-red-900 hover:bg-black text-white font-bold">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Banner></Banner> */}
            {/* <Donations donations={donations}></Donations> */}
            <div className="py-10 lg:max-w-[1300px] mx-auto">
                <h1 className="text-black text-5xl font-bold text-center">Donations</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                    {
                        donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>





                <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                    {
                        foodData?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                    {
                        clothingData?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                    {
                        healthData?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                    {
                        educationData?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;