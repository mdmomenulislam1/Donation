import React from 'react';

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(../src/assets/bg.png)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center py-5">
                            <input className="rounded text-center " type="text" placeholder="Category Name" />
                            <button className="btn bg-red-500 text-white font-bold hover:text-black hover:bg-white">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;