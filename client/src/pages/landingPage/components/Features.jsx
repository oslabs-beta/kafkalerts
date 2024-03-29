import SingleFeature from './SingleFeature';
import { v4 as uuid } from 'uuid';

const featureObj = [
  {
    icon: 'fa-universal-access',
    header: 'Accessibility',
    text: 'Designed with accessibility as the top priority, kafkAlerts works well with screen readers and keyboard navigation',
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

const Features = () => {
  const features = featureObj.map((feature) => (
    <SingleFeature feature={feature} key={uuid()} />
  ));
  return (
    <div id='feature-box'>
      <h1>Features</h1>
      {features}
    </div>
  );
};

export default Features;
