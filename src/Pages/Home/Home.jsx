import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Donations from '../../Components/Donations/Donations';
import { useLoaderData } from 'react-router-dom';

const Home = () => {


    const donations = useLoaderData()
    // console.log(donations);
    




    return (
        <div>
            <div className="h-[600px]">
                <div className="hero h-full" style={{ backgroundImage: "url('https://i.ibb.co/3yzZPYQ/Bg.png')"}} >
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center">
                            <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className="flex justify-center py-5">
                                <input className="text-center rounded-s-2xl w-full font-semibold text-black" type="text" placeholder="Category Name" />
                                <button className="p-5 rounded w-36 bg-red-900 hover:bg-black text-white font-bold">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;