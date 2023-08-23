import React, { useState, useEffect } from 'react';
import Button from '../../loginPage/components/Button.jsx';
import TextField from '../../loginPage/components/TextField.jsx';
const BrokerIdForm = ({ handleSubmit, menuOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [promURI, setPromURI] = useState('');
  const [brokerIds, setBrokerIds] = useState('');
  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className='broker-id-form'>
      {isExpanded ? (
        <>
          <TextField
            id='prometheus'
            label='Prometheus URI'
            placeholder='ex: http://localhost:9090'
            onChange={setPromURI}
            isRequired
          />
          <TextField
            id='brokers'
            label='Broker IDs'
            placeholder='ex: 1, 2, 3'
            onChange={setBrokerIds}
            isRequired
          />
          <div id='buttons'>
            <Button onPress={() => handleSubmit(promURI, brokerIds)}>
              Submit
            </Button>
            <Button onPress={toggleExpand}>Cancel</Button>
          </div>
        </>
      ) : (
        <Button onPress={toggleExpand} id='connect-button'>
          Connect Cluster
        </Button>
      )}
    </div>
  );
};

export default BrokerIdForm;
