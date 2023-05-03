import React from 'react';
import SingleFeature from './SingleFeature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AccessibilityIcon from '../../../assets/Icons/accessibility_icon.svg';
// import BrokerIcon from '../../../assets/Icons/network_alt_icon.svg';
// import AlertIcon from '../../../assets/Icons/bell_notification_icon.svg';
// import SecurityIcon from '../../../assets/Icons/lock_key_icon.svg';
// import HealthIcon from '../../../assets/Icons/health_shield_icon.svg';
// import SettingIcon from '../../../assets/Icons/settings_icon.svg';
// import CheckIcon from '../../../assets/Icons/check_icon.svg';

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
  // {
  //   icon: <SettingIcon />,
  //   header: 'Save Preferences',
  //   text: 'Save your preferences to your profile.',
  // },
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
