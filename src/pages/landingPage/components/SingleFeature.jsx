import React from 'react';

const SingleFeature = ({ feature }) => {
  return (
    <div>
      {feature.icon}
      <h1>{feature.header}</h1>
      <p>{feature.text}</p>
    </div>
  );
};

export default SingleFeature;
