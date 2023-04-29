import React from 'react';
import { useState, useEffect } from 'react';
import Metric from './Metric';

const Broker = ({ brokerId }) => {
  const [expandedDisplay, setExpandedDisplay] = useState(false);
  const [totalAlerts, setTotalAlerts] = useState(0);
  const [metrics, setMetrics] = useState({});

  const getBytesIn = async () => {
    console.log('getting Bytes In');
    const testArray = [
      [1682784224, '1316274'],
      [1682784284, '1328934'],
      [1682784344, '1341594'],
    ];
    return testArray;

    // window of 20 minutes, getting data in 1 minute intervals
    // const now = new Date();
    // const endTimestamp = Math.floor(now.getTime() / 1000);
    // const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    // const step = 60;
    // //fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
    // try {
    //   const response = await fetch(
    //     `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesin_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`
    //   );
    //   const data = await response.json();
    //   if (data) {
    //     setBytesIn(data.data.result);
    //     console.log('data has been parsed ', data);
    //     console.log('we have Bytes In: ', data.data.result);
    //   }
    //   // res.locals.metrics.bytesIn = data.data.result;
    // } catch (err) {
    //   console.log('error in bytes in');
    // }
  };
  const getUrp = async () => {
    console.log('Getting URP');
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startTimestamp = Math.floor(sevenDaysAgo.getTime() / 1000);
    const step = 86400 / 24;
    const queryURL = `http://localhost:9090/api/v1/query_range?query=kafka_server_replicamanager_underreplicatedpartitions&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`;
    // const oldQuery =
    //   'http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions';
    try {
      const response = await fetch(queryURL);
      const data = await response.json();
      if (data) {
        setUrp(data.data.result);
        console.log('we have URP: ', data.data.result);
      }
      // res.locals.metrics.urp = data.data.result;
    } catch (err) {
      console.log('error getting URP');
    }
  };
  const getBytesOut = async () => {
    console.log('getting Bytes Out');
    // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    const step = 60;
    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesout_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`
      );
      const data = await response.json();
      if (data) {
        setBytesOut(data.data.result);
        console.log('we have Bytes Out: ', data.data.result);
      }
    } catch (err) {
      console.log('error getting bytes out');
    }
  };

  const toggleExpand = () => {
    setExpandedDisplay(!expandedDisplay);
    if (expandedDisplay === true) {
      //if open, fetch and render graph
      //get bytesin, bytesOut, and URP
      setMetrics({ bytesIn: getBytesIn() });
    }
  };
  const brokerMetrics = [];
  for (const metric in metrics) {
    brokerMetrics.push(<Metric name={metric} result={metrics[metric]} />);
  }
  // const brokerMetrics = brokerData.metrics.map((metric) => (
  //   <Metric name={metric.name} result={metric.result} />
  // ));

  // console.log('brokerMetrics - ', brokerMetrics)
  //console.log('metrics in Broker is ', metrics)
  // style={{'background-color': {metric.altering ? 'salmon' : 'skyblue'}}}
  return (
    <section className='broker container' id={brokerId}>
      <div className='collapsed-bar'>
        <div>ID: {brokerId}</div>
        <div>
          Alerts: <p className='total-alerts-box'>{totalAlerts}</p>
        </div>
        {/* <div id='shorten'>Topics: {brokerData.topics.join(', ')}</div> */}
        {/* <div>Partitions: {brokerData.partitions}</div> */}
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
