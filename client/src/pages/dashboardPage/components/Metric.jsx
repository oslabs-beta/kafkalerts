import React from 'react';
import URPChart from './URPChart';
import BytesInChart from './BytesInChart';
import BytesOutChart from './BytesOutChart';

const Metric = ({ name, result }) => {
  let chart = [];
  chart =
    name === 'Bytes In'
      ? BytesInChart(result)
      : name === 'Bytes Out'
      ? BytesOutChart(result)
      : URPChart(result);

  return (
    <div className='metric'>
      <h2>{name}</h2>
      <div className='graph'>{chart}</div>
    </div>
  );
};

export default Metric;
