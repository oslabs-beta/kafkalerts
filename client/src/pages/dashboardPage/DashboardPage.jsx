import { useEffect, useState } from 'react';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../RootPage/components/Footer';
const DashboardPage = () => {
  const [username, setUsername] = useState('Demo User');
  const [connectionString, setConnectionString] = useState('prometheus:9090');
  const [brokerIds, setBrokerIds] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]);
  const [brokersAndAlerts, setBrokersAndAlerts] = useState([]);

  // when user submits form, ids will be added to an array
  const handleSubmit = async (promURI, brokerIds) => {
    const idsArray = brokerIds.split(',').map((id) => id.trim().toString());
    // update Prometheus host to use for querying later
    setConnectionString(promURI);
    // store brokerIds in DB
    try {
      const response = await fetch('/api/addbrokers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idsArray: idsArray, username: username }),
      });
      const data = await response.json();
      // update state with new array of Ids
      setBrokerIds(idsArray);
      console.log('broker IDs... ', idsArray);
      console.log('response from DB: ', data);
      e.target.reset();
    } catch (error) {
      console.error('Error submitting brokerIDs to database: ', error);
    }
  };

  useEffect(() => {
    // TO DO: change temp messages to three relevant messages
    const tempErrorMessages = [
      'Under Replicated Paritions is greater than 0',
      'Specified SLO 1 is out of bounds',
      'Specified SLO 4 is out of bounds',
    ];
    Promise.all(
      brokerIds.map(async (brokerId) => {
        try {
          const response = await fetch('prometheus');
          const jsonResponse = await response.json();
          return [jsonResponse];
        } catch (err) {
          console.log('error getting alert info for broker ', brokerId);
          return {
            brokerId: brokerId,
            alerts:
              brokerId === '2' || brokerId === '4' || brokerId === '9'
                ? [tempErrorMessages[(brokerId - 1) % 3]]
                : [],
          };
        }
      })
    ).then((values) => setBrokersAndAlerts(values));
  }, []);

  return (
    <div id='wrapper'>
      <main id='dashboard-page' className='pages'>
        <DashNav
          brokers={brokersAndAlerts}
          username={username}
          connectionString={connectionString}
          handleSubmit={handleSubmit}
          key={uuidv4()}
        />
        <BrokersContainer brokers={brokersAndAlerts} key={uuidv4()} />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
