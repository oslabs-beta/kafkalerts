import React from 'react';
import { useState } from 'react';
import Metric from './Metric';

const Broker = ({ brokerData }) => {
  const [expandedDisplay, setExpandedDisplay] = useState(false);
  const [totalAlerts, setTotalAlerts] = useState(0);

  const toggleExpand = () => setExpandedDisplay(!expandedDisplay);
  const brokerMetrics = brokerData.metrics.map((metric) => (
    <Metric name={metric} />
  ));
console.log('brokerMetrics - ', brokerMetrics)  
console.log('metrics in Broker is ', metrics)
  // style={{'background-color': {metric.altering ? 'salmon' : 'skyblue'}}}
  return (
    <section className='broker container' id={brokerData.id}>
      <div className='collapsed-bar'>
        <div>ID: {brokerData.id}</div>
        <div>
          Alerts: <p className='total-alerts-box'>{totalAlerts}</p>
        </div>
        <div id='shorten'>Topics: {brokerData.topics.join(', ')}</div>
        <div>Partitions: {brokerData.partitions}</div>
        <button onClick={toggleExpand}>
          {expandedDisplay ? 'collapse' : 'expand'}
        </button>
      </div>
      {expandedDisplay ? (
        <div className='broker-metrics'>{brokerMetrics}</div>
      ) : null}
    </section>
  );
};

export default Broker;
