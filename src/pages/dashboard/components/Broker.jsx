import React from 'react';
import { useState } from 'react';
import Metric from './Metric';
import { v4 as uuidv4 } from 'uuid';

const Broker = ({ id }) => {
  const [expandedDisplay, setExpandedDisplay] = useState(false);
  const [totalAlerts, setTotalAlerts] = useState(0);
  const [metrics, setMetrics] = useState({});

  const getBytesIn = async () => {
    console.log('getting Bytes In');
    const testData = {
      0: [
        [1682784224, '1316274'],
        [1682784284, '1328934'],
        [1682784344, '1341594'],
        [1682784404, '1366274'],
        [1682784464, '1388934'],
        [1682784524, '1401594'],
        [1682784584, '1416274'],
        [1682784644, '1428934'],
        [1682784704, '1441594'],
      ],
      1: [
        [1682784224, '1306274'],
        [1682784284, '1338934'],
        [1682784344, '1358994'],
        [1682784404, '1376274'],
        [1682784464, '1398934'],
        [1682784524, '1441594'],
        [1682784584, '1446274'],
        [1682784644, '1448934'],
        [1682784704, '1451594'],
      ],
      2: [
        [1682784224, '1260274'],
        [1682784284, '1289034'],
        [1682784344, '1295904'],
        [1682784404, '1316274'],
        [1682784464, '1328934'],
        [1682784524, '1341594'],
        [1682784584, '1386274'],
        [1682784644, '1428934'],
        [1682784704, '1441594'],
      ],
    };
    // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    const step = 60;
    //fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesin_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`
      );
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error in bytesIn in broker ', id);
      return testData[(id - 1) % 3];
    }
  };

  const getBytesOut = async () => {
    console.log('getting Bytes Out');
    const testData = {
      0: [
        [1682784224, '12516274'],
        [1682784284, '12608934'],
        [1682784344, '13001594'],
        [1682784404, '13116274'],
        [1682784464, '13389340'],
        [1682784524, '13415940'],
        [1682784584, '13416274'],
        [1682784644, '13417340'],
        [1682784704, '13417940'],
      ],
      1: [
        [1682784224, '12216274'],
        [1682784284, '12389340'],
        [1682784344, '12415940'],
        [1682784404, '12516274'],
        [1682784464, '12689340'],
        [1682784524, '12715940'],
        [1682784584, '12816274'],
        [1682784644, '12989304'],
        [1682784704, '13115904'],
      ],
      2: [
        [1682784224, '12316274'],
        [1682784284, '12389354'],
        [1682784344, '12395954'],
        [1682784404, '12516274'],
        [1682784464, '12689304'],
        [1682784524, '13415994'],
        [1682784584, '13516274'],
        [1682784644, '13689347'],
        [1682784704, '13715949'],
      ],
    };

    // // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    const step = 60;
    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesout_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`
      );
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error getting bytes out in broker', id);
      return testData[(id - 1) % 3];
    }
  };
  const getUrp = async () => {
    console.log('Getting URP');
    const testData = {
      0: [
        [1682784224, '0'],
        [1682784284, '0'],
        [1682784344, '0'],
        [1682784404, '1'],
        [1682784464, '2'],
        [1682784524, '2'],
        [1682784584, '2'],
        [1682784644, '2'],
        [1682784704, '2'],
      ],
      1: [
        [1682784224, '0'],
        [1682784284, '2'],
        [1682784344, '1'],
        [1682784404, '0'],
        [1682784464, '0'],
        [1682784524, '2'],
        [1682784584, '0'],
        [1682784644, '0'],
        [1682784704, '0'],
      ],
      2: [
        [1682784224, '2'],
        [1682784284, '2'],
        [1682784344, '3'],
        [1682784404, '0'],
        [1682784464, '0'],
        [1682784524, '0'],
        [1682784584, '0'],
        [1682784644, '3'],
        [1682784704, '6'],
      ],
    };
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startTimestamp = Math.floor(sevenDaysAgo.getTime() / 1000);
    const step = 86400 / 24;
    const queryURL = `http://localhost:9090/api/v1/query_range?query=kafka_server_replicamanager_underreplicatedpartitions&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`;
    // const oldQuery =
    //   'http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions';
    try {
      const response = await fetch(queryURL);
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error getting URP in broker ', id);
      return testData[(id - 1) % 3];
    }
  };
  const toggleExpand = async () => {
    if (!expandedDisplay) {
      //if open, fetch and render graph
      //get bytesin, bytesOut, and URP
      setMetrics({
        'Bytes In': await getBytesIn(),
        'Bytes Out': await getBytesOut(),
        URP: await getUrp(),
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

  return (
    <section className='broker container' id={id}>
      <div className='collapsed-bar'>
        <div>ID: {id}</div>
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
