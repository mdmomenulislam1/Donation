import React from 'react';

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co/3yzZPYQ/Bg.png')"}} >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center py-5">
                            <input className="text-center rounded-s-2xl w-full font-semibold text-black" type="text" placeholder="Category Name" />
                            <button className="p-5 rounded w-36 bg-red-500 text-white font-bold hover:text-black hover:bg-white">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;