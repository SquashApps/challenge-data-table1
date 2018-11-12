var constants = require('./constant')
var calculations = [
    {
      title: 'Impresssions', value: constants.IMPRESSION,
      template: function(val, row) {
        return  val
      }
    },
    {
      title: 'Loads', value: constants.LOAD,
      template: function(val, row) {
        return  val
      }
    },
    {
      title: 'Displays', value: constants.DISPLAYS,
      template: function(val, row) {
        return  val
      }
    },
    {
      title: 'LoadRate', value: constants.LOAD_RATE,
      template: function(val, row) {
        return  (val*100).toFixed(1)+'%'
      }
    },
    {
      title: 'Display', value: constants.DISPLAY_RATE,
      template: function(val, row) {
        return  (val*100).toFixed(1)+'%'
      }
    }
  ]

  module.exports = calculations;