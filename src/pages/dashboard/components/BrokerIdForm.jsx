import React, { useState, useEffect } from 'react';

const BrokerIdForm = ({handleSubmit}) => {
  // create state variables
  const [isExpanded, setIsExpanded] = useState(false);
  // update state when called
  const toggleExpand = () => {
    setIsExpanded(prevExpanded => !prevExpanded);
  }
  // if expanded - show form to collect brokerIds and location of Prometheus
  return (
    <div className='broker-id-form'> 
      <button onClick={toggleExpand}>{isExpanded ? 'Hide Form' : 'Connect Cluster'}</button>
      {isExpanded && (<form onSubmit={handleSubmit}>
        <label>
          <input 
            type='text' 
            placeholder='Enter Prometheus URI'
            name='promInput'
          />
        </label>
        <label>
          <input 
            type='text' 
            placeholder='Enter Broker IDs, separated by commas'
            name='idInput'
          />
        </label>
        <button type='submit'>Submit</button> 
      </form>)}
      
    </div>  
  );
};

export default BrokerIdForm;