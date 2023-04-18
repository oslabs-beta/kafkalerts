// const BrokersContainer = ({brokers}) => {
//   // map array of brokers into container
//   const displayBrokers = brokers.map(broker => {
//     console.log('broker name is... ', broker.name);
//     return <Broker name={broker.name} metrics={broker.metrics}/>

//   })
//   return (
//     <section id="brokers-container">
//       <h2>Brokers</h2>
//       {displayBrokers}
//     </section>
//   );
// };
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BrokersContainer from '../BrokersContainer';
import Broker from '../components/Broker';
import MetricOne from '../components/MetricOne';
import Button from '../components/Button';
console.log('hello ');
// test if broker container has a broker property
// test if broker has name and metrics property
// test map function - displayBrokers should be an array of brokers
// brokers should be an array
// displayBrokers should be an array
// test if container renders
describe('Broker Container functionality', () => {
  let brokers = [];
  // render(<BrokersContainer brokers={brokers} />);
  // const { getByText } = render(<BrokersContainer />);
  // beforeAll(() => {
  //   render(<BrokersContainer brokers={brokers} />)
  // });

  test('BrokersContainer should render to DOM', () => {
    render(<BrokersContainer brokers={[]} />);
    const heading = screen.getByText('Brokers');
    expect(heading).toBeInTheDocument();
  });
  // test('test child component', () => {
  //   expect(getByText(/Broker/i)).toBeInTheDocument();
  // });
});
