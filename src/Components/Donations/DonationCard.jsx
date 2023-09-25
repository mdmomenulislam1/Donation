import React from 'react';

const DonationCard = ({donation}) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg} = donation  ||  {}

    return (
        <div>
           
            <div style={{backgroundColor:card_bg}} className="rounded-md w-auto">
                <div className="">
                    <img
                        src={picture}
                        alt="img-blur-shadow"
                        layout="fill"
                        className="rounded-md"
                    />
                </div>
                <div className="p-6">
                    <h5 style={{backgroundColor:category_bg, color:text_button_bg}} className="mb-2 block text-xl font-bold w-[100px] p-3 text-center rounded-lg opacity-60">
                        {category}
                    </h5>
                    <Link to={`/donation/${id}`}>
                    </Link>
                    <p style={{color:text_button_bg}} className="block text-2xl font-semibold">
                        {title}
                    </p>
                    
                
                </div>
            </div>
            
        </div>
    );
};

export default DonationCard;