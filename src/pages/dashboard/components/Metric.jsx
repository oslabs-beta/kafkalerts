import React from 'react';

const Metric = ({ name, alerting }) => {
  return (
    <div className='metric'>
      <h2>{name}</h2>
      <div className='graph'></div>
    </div>
  );
};

export default Metric;
