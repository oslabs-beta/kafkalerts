import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function URPChart(urp) {
  const totalDuration = 14440;
  const delay = totalDuration/urp.length;

  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;

          const animation = {
            x: {
              type: "number",
              easing: "linear",
              duration: delay,
              from: NaN, // the point is initially skipped
              delay(ctx) {
                if (ctx.type !== "data" || ctx.xStarted) {
                  return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delay;
              },
            },
            y: {
              type: "number",
              easing: "linear",
              duration: delay,
              from: previousY,
              delay(ctx) {
                if (ctx.type !== "data" || ctx.yStarted) {
                  return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delay;
              },
            },
          };
        
          const urpOptions = {
            responsive: true,
            maintainAspectRatio: false,
        
            plugins: {
              legend: {
                position: "none",
              },
              title: {
                display: true,
                text: "Under Replicated Partitions",
              },
            },
            animation,
            scales: {
              x: {
                type: "linear",
                display: true,
                title: {
                  display: true,
                  text: "Time (Seconds)",
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "URP",
                },
                ticks: {
                  stepSize: 10000,
                },
              },
            },
          };

          const urpY = urp?.map((tuple) => Number(tuple[1]));
          const startTime = urp[0][0];
          const timeX = urp?.map((tuple, idx) => {
            return tuple[0] - startTime;
          });
        
          const data = {
            labels: timeX,
            datasets: [
              {
                label: "URP",
                data: urp,
                borderColor: "rgba(249, 75, 6)",
                backgroundColor: "rgba(249, 75, 6, 0.5)",
                borderWidth: 1,
                radius: 1,
              },
            ],
          };
        
          return <Line options={urpOptions} data={data} />;
}