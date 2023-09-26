import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg} = donation  ||  {}

    return (
        <div>
           <Link to={`/donations/${id}`}
           >
            <div style={{backgroundColor:card_bg}} className="rounded-md mx-auto w-auto h-[350px]">
                <div className="">
                    <img
                        src={picture}
                        alt="img-blur-shadow"
                        layout="fill"
                        className="rounded-md w-full"
                    />
                </div> <div className="p-6">
                    <h5 style={{backgroundColor:category_bg, color:text_button_bg}} className="mb-2 font-bold w-[110px] p-3 text-center rounded-lg opacity-80">
                        {category}
                    </h5>
                    
                    <p style={{color:text_button_bg}} className="block text-2xl font-semibold">
                        {title}
                    </p>
                    
                
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DonationCard;