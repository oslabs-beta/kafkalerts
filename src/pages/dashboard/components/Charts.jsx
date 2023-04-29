import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function BytesInChart(bytesIn) {
  const bytesInOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Kafka Broker Metrics - Bytes In',
      },
    },
    scales: {
      x: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: 'Time (Seconds)',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Bytes In',
        },
        ticks: {
          stepSize: 10000,
        },
      },
    },
  };
  // console.log('bytesIn... ', bytesIn);
  // get data
  // get bytes in/ time from bytes in array
  const bytesY = bytesIn?.map((tuple) => Number(tuple[1]));
  const startTime = bytesIn[0][0];
  const timeX = bytesIn?.map((tuple, idx) => {
    return tuple[0] - startTime;
  });
  const data = {
    labels: timeX,
    datasets: [
      {
        label: 'Dataset 1',
        data: bytesY,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={bytesInOptions} data={data} />;
}

export function BytesOutChart(bytesOut) {
  const bytesOutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Kafka Broker Metrics - Bytes Out',
      },
    },
    scales: {
      x: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: 'Time (Seconds)',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Bytes Out',
        },
        ticks: {
          stepSize: 10000,
        },
      },
    },
  };
  // console.log('bytesOut... ', bytesOut);
  // get data
  // get bytes out / time from bytes in array
  const bytesY = bytesOut?.map((tuple) => Number(tuple[1]));
  const startTime = bytesOut[0][0];
  const timeX = bytesOut?.map((tuple, idx) => {
    return tuple[0] - startTime;
  });
  const data = {
    labels: timeX,
    datasets: [
      {
        label: 'Dataset 1',
        data: bytesY,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={bytesOutOptions} data={data} />;
}

export function URPChart(URPData) {
  const URPOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Under-Replicated Partitions',
      },
    },
    scales: {
      x: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: 'Last 7 Days',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'URP Count',
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  // console.log('URP... ', URPData);

  const urps = URPData.map((tuple) => Number(tuple[1]));
  const startTime = URPData[0][0];
  const timeX = URPData.map((tuple, idx) => {
    return tuple[0] - startTime;
  });
  const data = {
    labels: timeX,
    datasets: [
      {
        label: 'Dataset 1',
        data: urps,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={URPOptions} data={data} />;
}
