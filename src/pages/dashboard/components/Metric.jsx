import React from 'react';
//import { Line, Chart } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Metric = ({ name, result, alerting }) => {
  const [metric, setMetric] = useState([]);
  // const [chartData, setChartData] = useState(null);
  console.log('inside Metric, result is ', result)
  
  const xValues = [];
  const yValues = [];
  let chartData;
  let chartOptions;
  if(name === 'Bytes In'){
    result[0].values.forEach((innerArr, i) => {
      // xValues.push(Number(innerArr[0]))
      yValues.push(Number(innerArr[1]))
      const date = new Date(innerArr[0]);

      xValues.push(date.toLocaleString());
    })
    // export const chartData
    chartData = {
      labels: xValues,
      datasets: [
        {
        label: 'Bytes In',
        data: yValues,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        },
      ],
    };
    // export const chartOptions
    chartOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Line Chart Example',
        },
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Time (seconds)',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value',
          },
          beginAtZero: false,
        },
      },
    };
  }
  if (name === 'Bytes Out') {
    yValues.push(result[0].value[1]);
    xValues.push(Number(result[0].value[0]));
  }
  console.log('yValues: ', yValues)
  console.log('xValues: ', xValues)
  return (
    <div className='metric'>
      <h2>{name}</h2>
      <div className='graph'>
       {name === 'Bytes In' ? <Line data={() => chartData} options={chartOptions} /> : null}
      </div>
    </div>
  );
};

export default Metric;
//<Line data={chartData} options={chartOptions} />
// {isShowing ? <div className='broker-metrics'>{brokerMetrics}</div> : null}
// const values = result.map(el => el.value)
  // for let i = 0; i < result.length; i++) { 
    
  //}
  // console.log(result[0].value)
  // console.log(values)

// bytes out = value 
// bytes in = values

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  
  // export function App() {
  //   return <Line options={options} data={data} />;
  // }