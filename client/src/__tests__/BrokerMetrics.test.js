import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {within} from '@testing-library/dom'
import BrokersContainer from '../BrokersContainer';
import Broker from '../components/Broker';
import MetricOne from '../components/MetricOne';
import Button from '../components/Button';

console.log('hello ');

describe('Testing brokers and metrics', () => {
  let brokers = [{name: 'brokerOne', metrics: ['lag', 'backwards overflow', 'urp'], key:'123'}, 
                 {name: 'brokerTwo', metrics: ['lag', 'backwards overflow', 'urp'], key:'456'}];
  let broker = {name: 'brokerOne', metrics: ['lag', 'backwards overflow', 'urp'], key:'123'}
  let brokerName = broker.name;
  let brokerMetrics = broker.metrics;
  let isShowing = false;
  const handleClick = jest.fn(isShowing => {
    isShowing = isShowing ? false : true;
    return isShowing;
  });
               
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

  test('Hide/Show Metrics toggles', () => {
    isShowing = false;
    isShowing = handleClick(isShowing);
    expect(isShowing).toBe(true);
    isShowing = handleClick(isShowing);
    expect(isShowing).toBe(false)
  })
  describe('metrics visible when isShowing is true', () => {
    //  
    expect(true).toBe(false);
  });

// const Broker = ({ name, metrics }) => {
//   // useState to toggle visibility of broker metrics
//   const [isShowing, setIsShowing] = useState(false);
//   // if button is clicked, changes if it is showing or not
//   const handleClick = () => {
//     setIsShowing(!isShowing);
//   };

//   // map passed in metrics to an array of metric components,
//   // each component will be a specific metric for that broker.
//   const brokerMetrics = metrics.map((metric) => <MetricOne metric={metric} />);

//   return (
//     <section className='broker' id={name.replace(/\s+/g, '-').toLowerCase()}>
//       <h3>{name}</h3>
//       {isShowing ? <div className='broker-metrics'>{brokerMetrics}</div> : null}
//       {/* <button onClick={handleClick}>Show/Hide Metrics</button> */}
//       <Button onPress={() => handleClick()}>Show/Hide Metrics</Button>
//     </section>
//   );
// };
});

