import React from 'react';
import { useState, useEffect } from 'react';
import { BytesInChart, BytesOutChart, URPChart } from './Charts';

const Metric = ({ name, result, alerting }) => {
  console.log(
    'inside metric name is ',
    name,
    ' inside Metric, result is ',
    result
  );
  let chart = [];
  if (name === 'Bytes In') {
    console.log('bytes in values', result[0].values)
    chart = BytesInChart(result[0].values);
  }
  if (name === 'Bytes Out') {
    chart = BytesOutChart(result[0].values);
  }
  if (name === 'URP') {
    chart = URPChart(result[0].values);
  }

  return (
    <div className='metric'>
      <h2>{name}</h2>
      <div className='graph'>{chart}</div>
    </div>
  );
};

export default Metric;
