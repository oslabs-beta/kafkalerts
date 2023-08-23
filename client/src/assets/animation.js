const animation = {};


let restart = true;
const totalDuration = 50000;
//const duration = (ctx) => easing(ctx.index / data.length) * totalDuration / data.length;
const delay = totalDuration / data.length; //(ctx) => easing(ctx.index / data.length) * totalDuration;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

animation.bytesIn = {
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


//SAMPLE DATA GENERATOR
const data = [];
const data2 = [];
let prev = 1000;
let prev2 = 1000;
for (let i = 0; i < 100; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}

//SAMPLE CONFIG
//TODO: SEPARATE CHARTS INTO INDIVIDUAL MODULES - UPDATE CONFIG
const config = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Bytes In',
      borderColor: 'red',
      borderWidth: 1,
      radius: 0,
      data: data,
    },
    {
      label: 'Bytes Out',
      borderColor: 'blue',
      borderWidth: 1,
      radius: 0,
      data: data2,
    }]
  },
  options: {
    animation,
    interaction: {
      intersect: false
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'My Chart'
      }
    },
    scales: {
      x: {
        type: 'linear',
        ticks: {
          stepSize: 10,
        }
      }
    }
  }
};
