import React from 'react';
import AlertsContainer from './AlertsContainer';
import BrokersContainer from './BrokersContainer';

const Feed = ({ alerts, brokers }) => {
  return (
    <main id='feed-container'>
      <AlertsContainer alerts={alerts} />
      <BrokersContainer brokers={brokers} />
    </main>
  );
};

export default Feed;
