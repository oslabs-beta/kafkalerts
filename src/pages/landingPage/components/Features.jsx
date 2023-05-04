import React from 'react';
import SingleFeature from './SingleFeature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccessibilityIcon from '../../../assets/Icons/accessibility_icon.svg';
import BrokerIcon from '../../../assets/Icons/network_alt_icon.svg';
import AlertIcon from '../../../assets/Icons/bell_notification_icon.svg';
import SecurityIcon from '../../../assets/Icons/lock_key_icon.svg';
import HealthIcon from '../../../assets/Icons/health_shield_icon.svg';
import SettingIcon from '../../../assets/Icons/settings_icon.svg';
import CheckIcon from '../../../assets/Icons/check_icon.svg';

const featureObj = [
  {
    // icon: <AccessibilityIcon />,
    icon: <FontAwesomeIcon icon='fa-solid fa-universal-access' />,
    header: 'Accessibility',
    text: 'Designed with accessibility as the top priority, kafkAlerts works well with screen readers and keyboard navigation',
  },
  {
    icon: BrokerIcon, //<BrokerIcon />,
    header: 'Broker Metrics',
    text: 'See Kafka Cluster metrics broken down by individual broker.',
  },
  {
    // icon: <FontAwesomeIcon icon='fa-solid fa-bell' />,
    icon: <AlertIcon />,
    header: 'Alerts',
    text: 'When an issue is detected, broker specific alerts immediately appear at the top of your page.',
  },
  {
    icon: <SecurityIcon />,
    header: 'Security',
    text: 'User profile data stored securely.',
  },
  {
    icon: <HealthIcon />,
    header: 'Diagnose Issues',
    text: 'Use alerts and metrics to determine the source of cluster health issues.',
  },
  // {
  //   icon: <SettingIcon />,
  //   header: 'Save Preferences',
  //   text: 'Save your preferences to your profile.',
  // },
  {
    icon: <CheckIcon />,
    header: 'Testing',
    text: 'Tested for accessibility and reliability.',
  },
];

const features = featureObj.map((feature) => {
  return <SingleFeature feature={feature} />;
});

const Features = () => {
  return (
    <div id='feature-box'>
      <h1>Features</h1>
      <div id='features'>{features}</div>
      {/* <div className='features-row'>{features.slice(3, 6)}</div> */}
    </div>
  );
};

export default Features;
