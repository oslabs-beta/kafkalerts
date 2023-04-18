import React, {useRef} from 'react';


const MetricOne = ({metric}) => {
  

  return (
    <div className="metric">
      <h2>{metric}</h2>
      <div className="graph"></div>
    </div>
  );
};

export default MetricOne;