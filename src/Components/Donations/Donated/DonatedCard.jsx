import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCard = ({donation}) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg, price, description } = donation || {}


  console.log(id);
  return (
    <div>
        <div style={{ backgroundColor: card_bg }} className="rounded-md h-[250px] flex">
          <div className="h-full">
            <img
              src={picture}
              alt="img-blur-shadow"
              layout="fill"
              className="rounded-md h-[250px] w-[250px]"
            />
          </div>
          
          <div className="px-5 py-5">
            <h5 style={{ backgroundColor: category_bg, color: text_button_bg }} className="my-4 mb-2 font-bold w-[110px] p-3 text-center rounded-lg opacity-80">
              {category}
            </h5>

            <p style={{ color: text_button_bg }} className="block text-2xl font-bold">
              {title}
            </p>

            <p style={{ color: text_button_bg }} className="block text-2xl font-bold my-4">
               $ { price}
            </p>
            <Link 
            to={`/donations/${id}`}>
            <button className="p-3 rounded-lg text-center text-2xl font-bold text-white" style={{ backgroundColor: category_bg }}>
            View Details
              </button>
            </Link>


          </div>
        </div>
    </div>
  );
};

export default DonatedCard;