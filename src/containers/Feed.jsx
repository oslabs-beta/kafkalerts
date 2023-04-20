import React from 'react';
import AlertsContainer from './AlertsContainer';
import BrokersContainer from './BrokersContainer';

const Feed = ({ alerts, brokers }) => {
  return (
    <main id='feed-container'>
      <AlertsContainer brokers={alerts} />
      <BrokersContainer alerts={alerts} brokers={brokers} />
    </main>
  );
};

export default Feed;
