import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Metric from './Metric';
import Button from '../../RootPage/components/Button.jsx';

const Broker = ({ id, alerts, getBytesIn, getBytesOut, getUrp }) => {
  const [expandedDisplay, setExpandedDisplay] = useState(false);
  const [metrics, setMetrics] = useState({});

  const toggleExpand = async () => {
    if (!expandedDisplay) {
      //if open, fetch and render graph
      //get bytesin, bytesOut, and URP
      setMetrics({
        'Bytes In': await getBytesIn(id),
        'Bytes Out': await getBytesOut(id),
        URP: await getUrp(id),
      });
    }
    setExpandedDisplay(!expandedDisplay);
  };

  const brokerMetrics = [];
  for (const metric in metrics) {
    brokerMetrics.push(
      <Metric name={metric} result={metrics[metric]} key={uuidv4()} />
    );
  }
  useEffect(() => {
    if (alerts.length) toggleExpand();
  }, []);

  return (
    <section className='broker' id={'broker' + id}>
      <div className='collapsed-bar'>
        <div>ID: {id} | </div>
        Alerts:
        <div
          className={alerts.length ? 'alerts alerting' : 'alerts'}
          style={{}}
        >
          {alerts.length}
        </div>
        <p>{alerts}</p>
        <Button onPress={toggleExpand}>
          {expandedDisplay ? 'Hide' : 'Show'}
        </Button>
      </div>
      {expandedDisplay && <div className='broker-metrics'>{brokerMetrics}</div>}
    </section>
  );
};

export default Broker;
