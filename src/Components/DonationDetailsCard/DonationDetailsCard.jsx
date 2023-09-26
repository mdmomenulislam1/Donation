import { stringify } from 'postcss';
import React from 'react';
import swal from "sweetalert";

const DonationDetailsCard = ({ donation }) => {

  const { id, picture, title, category, category_bg, card_bg, text_button_bg, price, description } = donation || {}


  const handleAddToDonation = () => {

    const addDonatedItemArr = [];

    const DonatedItem = JSON.parse(localStorage.getItem('Donated'))
    if (!DonatedItem) {
      addDonatedItemArr.push(donation)
      localStorage.setItem('Donated', JSON.stringify(addDonatedItemArr))
      swal("Good job!", "Products added successfully!", "success");
      // alert("Added")
    }

    else {
      const isExists = DonatedItem.find(donation => donation.id === id)

      if (!isExists) {
        addDonatedItemArr.push(...DonatedItem, donation)
        localStorage.setItem('Donated', JSON.stringify(addDonatedItemArr))
        swal("Good job!", "Products added successfully!", "success");
        // alert("Added")
      }
      else{
        // alert("Alreay")
        swal("Error!", "No duplicate!", "error");
      }
    }


  }


  return (
    <div className="max-w-[1300px] mx-auto px-10 lg:px-0">
      <div>
        <div className="card w-full glass relative">
          <img src={picture} className="w-full rounded-lg" alt="car!" />
          <div className="absolute bottom-0 w-full p-4 bg-[#00000099]">
            <button onClick={handleAddToDonation} className="ml-10 px-5 py-3 rounded-lg text-center text-2xl font-bold text-white" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-justify font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
