import React, { useRef } from 'react';
import Button from './Button';
import { useState } from 'react';

import MetricOne from './MetricOne';

const Broker = ({ name, metrics }) => {
  // useState to toggle visibility of broker metrics
  const [isShowing, setIsShowing] = useState(false);
  // if button is clicked, changes if it is showing or not
  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  // map passed in metrics to an array of metric components,
  // each component will be a specific metric for that broker.
  const brokerMetrics = metrics.map((metric) => <MetricOne metric={metric} />);

  return (
    <section className='broker' id={name}>
      <h3>{name}</h3>
      {isShowing ? <div className='broker-metrics'>{brokerMetrics}</div> : null}
      {/* <button onClick={handleClick}>Show/Hide Metrics</button> */}
      <Button onPress={() => handleClick()}>Show/Hide Metrics</Button>
    </section>
  );
};

export default Broker;
