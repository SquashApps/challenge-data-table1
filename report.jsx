var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')
var dimensions = require('./dimensions');
var calculations = require('./calculations');
var reduce = require('./reduce');

module.exports = createReactClass({
  render() {
    return (
      <div>
        <h2 className="title">Data Analytics table</h2>
        <ReactPivot rows={rows}
          dimensions={dimensions}
          reduce={reduce}
          calculations={calculations}
          defaultStyles
          activeDimensions={['Date']} />
      </div>
    )
  }
})
