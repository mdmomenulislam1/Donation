import React, { useEffect } from 'react';
import { Pie, PieChart } from 'recharts';


const data01 = [
    {
      "Donated": 9,
      "value": 15
    }
  ];


const Statistics = () => {


    useEffect(() => {
        const DonatedItem = JSON.parse(localStorage.getItem('Donated'));

})

    return (
        <div className="max-w-[1300px] mx-auto">
            <h1>Statistics</h1>

            <PieChart>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </div>
    );
};

export default Statistics;