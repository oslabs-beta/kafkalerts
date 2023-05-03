import React from 'react';
import SingleFeature from './SingleFeature';

const featureObj = [
  {
    icon: 'fa-universal-access',
    header: 'Accessibility',
    text: 'With accessibility at the forefront of all our design decisions, kafkAlerts has an accessibility rating of 100.',
  },
  {
    icon: 'fa-chart-line',
    header: 'Broker Metrics',
    text: 'See Kafka Cluster metrics broken down by individual broker.',
  },
  {
    icon: 'fa-bell',
    header: 'Alerts',
    text: 'When an issue is detected, broker specific alerts immediately appear at the top of your page.',
  },
  {
    icon: 'fa-lock',
    header: 'Security',
    text: 'User profile data stored securely.',
  },
  {
    icon: 'fa-suitcase-medical',
    header: 'Diagnose Issues',
    text: 'Use alerts and metrics to determine the source of cluster health issues.',
  },
  {
    icon: 'fa-file-lines',
    header: 'Testing',
    text: 'Tested for accessibility and reliability.',
  },
];

const features = featureObj.map((feature) => (
  <SingleFeature feature={feature} />
));

const Features = () => {
  return (
    <div id='feature-box'>
      <h1>Features</h1>
      {features}
    </div>
  );
};

export default Features;
