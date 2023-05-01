import React from 'react';
import { useState, useEffect } from 'react';
import Metric from './Metric';
import { v4 as uuidv4 } from 'uuid';
import test from '../../../assets/testData.js'

console.log(test)

const Broker = ({ id, alerts }) => {
  const [expandedDisplay, setExpandedDisplay] = useState(false);
  const [metrics, setMetrics] = useState({});

  async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 1000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  }

  const getBytesIn = async () => {
    console.log('getting Bytes In');
    // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    const step = 60;
    //fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
    try {
      const response = await fetchWithTimeout(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesin_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`
      );
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error in bytesIn in broker ', id);
      return test.bytesIn[(id - 1) % 3];
    }
  };

  const getBytesOut = async () => {
    console.log('getting Bytes Out');
    // // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - 20 * 60);
    const step = 60;
    try {
      const response = await fetchWithTimeout(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesout_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`
      );
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error getting bytes out in broker', id);
      return test.bytesOut[(id - 1) % 3];
    }
  };
  const getUrp = async () => {
    console.log('Getting URP');
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startTimestamp = Math.floor(sevenDaysAgo.getTime() / 1000);
    const step = 86400 / 24;
    const queryURL = `http://localhost:9090/api/v1/query_range?query=kafka_server_replicamanager_underreplicatedpartitions&start=${startTimestamp}&end=${endTimestamp}&step=${step}s{broker_id=${id}}`;
    // const oldQuery =
    //   'http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions';
    try {
      const response = await fetchWithTimeout(queryURL);
      const data = await response.json();
      if (data) {
        return data.data.result;
      }
    } catch (err) {
      console.log('error getting URP in broker ', id);
      return test.urp[(id - 1) % 3];
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
  useEffect(() => {
    if (alerts.length) toggleExpand();
  }, []);
  return (
    <section className='broker container' id={'broker' + id}>
      <div className='collapsed-bar'>
        <div>ID: {id}</div>
        Alerts:{' '}
        <div
          className='total-alerts-box'
          style={{
            backgroundColor: alerts.length
              ? 'rgb(250, 115, 137)'
              : 'rgb(171, 171, 255)',
          }}
        >
          {alerts.length}
        </div>
        <p>{alerts}</p>
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
