import React from 'react';
import SingleFeature from './SingleFeature';

const numFeatures = [1, 2, 3, 4, 5, 6];

const features = numFeatures.map((feature) => {
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
