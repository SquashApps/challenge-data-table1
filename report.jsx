const React = require('react')
const ReactPivot = require('react-pivot')
const createReactClass = require('create-react-class')

const rows = require('./data.json')
const reduce = require('./utilities/reportReducer.js')
const dimensions = require('./utilities/reportDimensions.js')
const calculations = require('./utilities/reportCalculations.js')


module.exports = createReactClass({
  render() {
    return (
      <div className = "tableStyle">
        <ReactPivot
          rows={rows}
          dimensions={dimensions}
          reduce={reduce}
          calculations={calculations}
          activeDimensions={['Date']} />
      </div>
    )
  }
})
