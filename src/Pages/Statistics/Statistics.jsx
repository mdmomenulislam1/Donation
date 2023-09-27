import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = ({}) => {
    


    const DonatedItem = JSON.parse(localStorage.getItem('Donated'));
    const donatedItem = DonatedItem.length;
    

    const donationData = useLoaderData();
    const totalDonationItem = donationData.length;

    

    const numberDonatedItem = [
        ["Type", "Value"],
        ["Donated", donatedItem],
        ["Not Donated", totalDonationItem - donatedItem]
    ];




    return (
        <div className="max-w-[1300px] mx-auto my-5 text-4xl font-semibold">
            <h1 className="text-4xl font-bold text-center my-5"> Donation Statistics</h1>

            <Chart
            className="mx-auto flex flex-col"
                chartType="PieChart"
                data={numberDonatedItem}
                width={"95%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;