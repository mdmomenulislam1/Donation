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





// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

// MainComponent.js
import React from 'react';
import PieChart from './PieChart';

const MainComponent = () => {
  const chartData = {
    labels: ['Data One', 'Data Two'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#FC2525', '#05CBE1'],
      },
    ],
  };

  return (
    <div>
      <h1>Main Component</h1>
      <PieChart data={chartData} />
    </div>
  );
};

export default MainComponent;