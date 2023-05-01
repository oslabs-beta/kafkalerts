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
      {features}
    </div>
  );
};

export default Features;
