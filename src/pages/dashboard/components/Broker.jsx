import React from 'react';
import Button from '../../homepage/components/Button';
import { useState } from 'react';
import Metric from './Metric';

const Broker = ({ name, metrics, showing }) => {
  // useState to toggle visibility of broker metrics
  const [isShowing, setIsShowing] = useState(showing);
  // if button is clicked, changes if it is showing or not
  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  // map passed in metrics to an array of metric components,
  // each component will be a specific metric for that broker.
  const brokerMetrics = metrics.map((metric) => (
    <Metric name={metric.stat} result={metric.result} alerting={metric.alerting} />
  ));
console.log('brokerMetrics - ', brokerMetrics)  
console.log('metrics in Broker is ', metrics)
  // style={{'background-color': {metric.altering ? 'salmon' : 'skyblue'}}}
  return (
    <section
      className='broker container'
      id={name.replace(/\s+/g, '-').toLowerCase()}
    >
      <h3>{name}</h3>
      {isShowing ? <div className='broker-metrics'>{brokerMetrics}</div> : null}
      <Button onPress={() => handleClick()}>Show/Hide Metrics</Button>
    </section>
  );
};

export default Broker;
