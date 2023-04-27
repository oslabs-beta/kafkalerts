const React = require('react')
const App = require('../App.jsx').default

const { render } = require('@testing-library/react')
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)
  
  expect(results).toHaveNoViolations()
})

// const React = require('react')
// const { render } =  require('react-dom')
// const App = require('../App')

// const { axe, toHaveNoViolations } = require('jest-axe')
// expect.extend(toHaveNoViolations)

// it('should demonstrate this matcher`s usage with react', async () => {
//   render(<App/>, document.body)
//   const results = await axe(document.body)
//   expect(results).toHaveNoViolations()
// })