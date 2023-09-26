import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCard = ({donation}) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg, price, description } = donation || {}


  console.log(id);
  return (
    <div>
        <div style={{ backgroundColor: card_bg }} className="rounded-md h-[200px] flex">
          <div className="">
            <img
              src={picture}
              alt="img-blur-shadow"
              layout="fill"
              className="rounded-md h-[200px] w-[250px]"
            />
          </div>
          
          <div className="py-1 px-5 md:py-3">
            <h5 style={{ backgroundColor: category_bg, color: text_button_bg }} className="my-2 font-bold w-[110px] p-2 text-center rounded-lg opacity-80">
              {category}
            </h5>

            <p style={{ color: text_button_bg }} className="block md:text-2xl font-bold">
              {title}
            </p>

            <p style={{ color: text_button_bg }} className="block text-2xl font-bold my-2">
               $ { price}
            </p>
            <Link 
            to={`/donations/${id}`}>
            <button className="p-2 md:p-3 rounded-lg text-center md:text-2xl font-bold text-white" style={{ backgroundColor: category_bg }}>
            View Details
              </button>
            </Link>


          </div>
        </div>
    </div>
  );
};

export default DonatedCard;