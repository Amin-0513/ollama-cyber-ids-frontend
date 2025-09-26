import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartBar = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: "Bar",
        data: [100, 200, 300],
        backgroundColor: 'red'
      }
    ]
  };

  const options = {}; // Customize chart options as needed

  return (
    <div>
      <h1>Hello from Chart Section</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartBar;
