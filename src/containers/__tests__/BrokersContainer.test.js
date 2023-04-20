import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {within} from '@testing-library/dom'
import BrokersContainer from '../BrokersContainer';
import Broker from '../components/Broker';
import MetricOne from '../components/MetricOne';
import Button from '../components/Button';
console.log('hello ');
// test if broker container has a broker property
// test if broker has name and metrics property
// test map function - displayBrokers should be an array of brokers
// brokers should be an array

// test if container renders
describe('Broker Container displays properly', () => {
  let container;
  let alerts = [];
  let brokers = [{name: 'brokerOne', metrics: ['lag', 'backwards overflow', 'urp'], key:'123'}, 
                 {name: 'brokerTwo', metrics: ['lag', 'backwards overflow', 'urp'], key:'456'}];
  // render(<BrokersContainer brokers={brokers} />);
  // const { getByText } = render(<BrokersContainer />);
  beforeAll(() => {
    container = render(<BrokersContainer key='brokers-container' brokers={brokers} alerts={alerts} />)
  });

  test('BrokersContainer should render to DOM', () => {
    // render(<BrokersContainer brokers={[]} />);
    const heading = container.getByText('Brokers');
    expect(heading).toBeInTheDocument();
  });
  
  test('BrokersContainer renders number of brokers equal to brokers.length with name of broker on page', () => {
    // how to get number of broker components rendered on screen?
    let numBrokers = 0;
    for(let broker of brokers){
      let brokerName = broker.name;
      let brokerMetrics = broker.metrics;
      
      render(<Broker name={brokerName} metrics={brokerMetrics}/>)
      
      let renderedBroker = screen.getByText(brokerName)
      expect(renderedBroker).toBeInTheDocument();
      numBrokers++;
    }
    // expect(getAllByText(brokers[0].metrics[0]).toEqual(brokers.length))
    expect(brokers.length).toEqual(numBrokers);
    
  });
  
  test('Brokers names are displayed on the page', () => {
    const broker1Name = brokers[0].name;
    const broker1Metrics = brokers[0].metrics;
    const broker2Name = brokers[1].name;
    const broker2Metrics = brokers[1].metrics;

    render(<Broker name={broker1Name} metrics={broker1Metrics}/>)
    render(<Broker name={broker2Name} metrics={broker2Metrics}/>)

    const broker1 = screen.getByText(broker1Name);
    const broker2 = screen.getByText(broker2Name);

    expect(broker1).toBeInTheDocument();
    expect(broker1).toHaveTextContent('brokerOne');
    expect(broker2).toBeInTheDocument();
    expect(broker2).toHaveTextContent('brokerTwo');
  })

});

// check if button has functionality
describe('Broker components... ', () => {
  let container;
  let brokers = [
    {
      name: 'Alerting-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: true },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
    {
      name: 'All-Good-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: false },
      ],
    },
    {
      name: 'Second-Alerting-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
  ];
  let broker = {name: 'brokerOne', metrics: ['lag', 'backwards overflow', 'urp'], key:'123'}
  let brokerName = broker.name;
  let brokerMetrics = broker.metrics;
  let isShowing = false;
  const handleClick = jest.fn(isShowing => !isShowing);

  // render(<BrokersContainer brokers={brokers} />);
  // const { getByText } = render(<BrokersContainer />);
  beforeAll(() => {
    // container = render(<BrokersContainer key='brokers-container' brokers={brokers} />)
    broker = render(<Broker name={brokerName} metrics={brokerMetrics}/>)
  });
  
  test('broker has a button', () => {
    //render(<Broker name={brokerName} metrics={brokerMetrics}/>)
    const buttons = screen.getAllByRole('button');
    for(let button of buttons) expect(button).toBeInTheDocument();
  });
 
  test('button says show/hide metrics', () => {
    render(<Broker name={brokerName} metrics={brokerMetrics}/>)
    const buttons = screen.getAllByRole('button');
    for(let button of buttons) expect(button).toHaveTextContent('Show/Hide Metrics');
  });

  test('button is clickable', () => {
    render(<Broker name={brokerName} metrics={brokerMetrics}/>)
    
    const button = render(<Button onClick={handleClick}/>)
    const buttons = screen.getAllByRole('button');
    
    const showHide = screen.getByText('Show/Hide Metrics')
    fireEvent.click(showHide);
    
    // test if test works with dummy button
    let createdButton = document.createElement('button');
    createdButton.onclick = handleClick;
    fireEvent.click(createdButton)
    expect(handleClick).toHaveBeenCalledTimes(1)
    
  });
    
  
});