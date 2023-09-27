import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = ({ }) => {
    const DonatedItem = JSON.parse(localStorage.getItem('Donated'));
    const donatedItem = DonatedItem.length;
    console.log(donatedItem);



    const donationData = useLoaderData();
    const totalDonationItem = donationData.length;
    console.log(totalDonationItem);



    const dataDonatedItem = [
        ["Type", "Value"],
        ["Your Donation", donatedItem],
        ["Total Donation", totalDonationItem]
    ];


    const donatedVsNotDonated = [
        ["Type", "Value"],
        ["Donated", donatedItem],
        ["Not Donated", totalDonationItem -donatedItem]
    ];

    return (
        <div className="max-w-[1300px] mx-auto my-5 text-4xl font-semibold">
            <h1 className="text-4xl font-bold text-center my-5"> Donation Statistics</h1>

            <div className="flex flex-col justify-between items-center lg:flex-row my-10">
            <div className="flex-1">
            <h1 className="text-2xl font-bold text-center">Total vs Donated Pie Chart</h1>
                <Chart className="mx-auto"
                    chartType="PieChart"
                    data={dataDonatedItem}
                    width={"90%"}
                    height={"400px"} />
            </div>

            
            <div className="flex-1">
            <h1 className="text-2xl font-bold text-center">Donated vs Not Donated Pie Chart</h1>
                <Chart className="mx-auto"
                    chartType="PieChart"
                    data={donatedVsNotDonated}
                    width={"90%"}
                    height={"400px"} />
            </div>

            </div>
           
        </div>
    );
};

export default Statistics;