import React from 'react';
import SingleFeature from './SingleFeature';
import AccessibilityIcon from '../../../assets/Icons/accessibility_icon.svg'
import BrokerIcon from '../../../assets/Icons/network_alt_icon.svg'
import AlertIcon from '../../../assets/Icons/bell_notification_icon.svg'
import SecurityIcon from '../../../assets/Icons/lock_key_icon.svg'
import HealthIcon from '../../../assets/Icons/health_shield_icon.svg'
import SettingIcon from '../../../assets/Icons/settings_icon.svg'
import CheckIcon from '../../../assets/Icons/check_icon.svg'

const featureObj = [
  {
    icon: <AccessibilityIcon/>,
    header: "Accessibility",
    text: "Designed with accessibility at the forefront.",
  }, 
  {
    icon: <BrokerIcon/>,
    header: "Broker Metrics",
    text: "See Kafka Cluster metrics broken down by individual broker.",
  }, 
  {
    icon: <AlertIcon/>,
    header: "Alerts",
    text: "Get broker specific alerts when an issue is detected.",
  }, 
  {
    icon: <SecurityIcon/>,
    header: "Security",
    text: "User profile data stored securely.",
  }, 
  {
    icon: <HealthIcon/>,
    header: "Diagnose Issues",
    text: "Use alerts and metrics to determine the source of cluster health issues.",
  }, 
  {
    icon: <SettingIcon/>,
    header: "Save Preferences",
    text: "Save your preferences to your profile.",
  },
  {
    icon: <CheckIcon/>,
    header: "Testing",
    text: "Tested for accessibility and reliability.",
  }
];

const features = featureObj.map((feature) => {
  return <SingleFeature feature={feature} />;
});

const Features = () => {
  return (
    <div className='features'>
      <h1>Features</h1>
      <div className='features-row'>
        {features.slice(0,3)}
      </div>
      <div className='features-row'>
        {features.slice(3,6)}
      </div>
    </div>
  );
};

export default Features;
