import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [
        'Color1',
        'Color2',
        'Color3',
        'Color4',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          '#9E22FF',
          '#FF0000',
          '#8b1da2',
          '#3d44ff'
        ],
        hoverOffset: 4
      }]
    };
    

function PieChart() {
  return <Pie data={data} 
  options= {{
    // responsive: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        }
      }}
    }
  }
  />;
}


export default PieChart;