import { v4 as uuidv4 } from 'uuid';
import Broker from '../components/Broker';
import test from '../../../assets/testData.js';

const BrokersContainer = ({ brokers }) => {
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

  const getBytesIn = async (id) => {
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
      return test.bytesInAlt();
    }
  };

  const getBytesOut = async (id) => {
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
      return test.bytesOutAlt();
    }
  };

  const getUrp = async (id) => {
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
      return test.urpAlt();
    }
  };
  const displayBrokers = brokers.map((broker) => {
    return (
      <Broker
        id={broker.brokerId}
        alerts={broker.alerts}
        getBytesIn={getBytesIn}
        getBytesOut={getBytesOut}
        getUrp={getUrp}
        key={uuidv4()}
      />
    );
  });
  return <section id='brokers-container'>{displayBrokers}</section>;
};

export default BrokersContainer;
