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


export default function BytesInChart(bytesIn) {
  // Generates Demo Data
  // const demoData = [];
  // let prev = 1000;
  // for (let i = 0; i < 100; i++) {
  //   prev += 5 - Math.random() * 10;
  //   demoData.push({x: i, y: prev});
  // }
  const totalDuration = 50000;
  //const duration = (ctx) => easing(ctx.index / data.length) * totalDuration / data.length;
  const delay = totalDuration / bytesIn.length; //(ctx) => easing(ctx.index / data.length) * totalDuration;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;


  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delay,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delay;
      }
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delay,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delay;
      }
    }
  };

  const bytesInOptions = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: true,
        text: 'Kafka Broker Metrics - Bytes In',
      },
    },
    animation,
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
          text: 'Bytes',
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
        label: 'Bytes In',
        data: bytesIn,
        borderColor: 'rgba(249, 75, 6)',
        backgroundColor: 'rgba(249, 75, 6, 0.5)',
        borderWidth: 1,
        radius: 2,
      },
    ],
  };

  return <Line options={bytesInOptions} data={data} />;
}