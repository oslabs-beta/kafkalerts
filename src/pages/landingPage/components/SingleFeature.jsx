import React from 'react';

const SingleFeature = ({ feature }) => {
  const { icon, header, text } = feature;
  return (
    <div className='single-feature-box'>
      <img src={icon} />
      {feature.icon}
      <h1>{feature.header}</h1>
      <p>{feature.text}</p>
    </div>
  );
};

export default SingleFeature;
