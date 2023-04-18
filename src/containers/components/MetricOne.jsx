import React, { useRef } from 'react';
const alertColors = {
  alerting: 'salmon',
  notAlerting: 'skyblue',
};

const MetricOne = ({ name, alerting }) => {
  return (
    <div
      className='metric'
      style={{
        background: alerting ? alertColors.alerting : alertColors.notAlerting,
      }}
    >
      <h2>{name}</h2>
      <div className='graph'></div>
    </div>
  );
};

export default MetricOne;
