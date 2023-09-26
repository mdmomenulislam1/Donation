import React from "react";
import { Chart } from "react-google-charts";

const Statistics = ({}) => {

    const DonatedItem = JSON.parse(localStorage.getItem('Donated'));
    const donatedLength = DonatedItem.length;
    
    fetch("Donation.json")
        .then((res) => res.json())
        .then((data2) => {console.log(data2.length)});

    const data = [
        ["Type", "Value"],
        ["Donated", donatedLength],
        ["Not Donated", 15 - donatedLength]
        
    ];




    return (
        <div className="max-w-[1300px] mx-auto my-5 text-4xl font-semibold">
            <h1 className="text-4xl font-bold text-center"> Donation Statistics</h1>

            <Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"400px"}
                className=""
            />
        </div>
    );
};

export default Statistics;