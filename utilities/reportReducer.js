const reduce = function(row, data) {
    if(row.type === 'load')
      data.loadCount = (data.loadCount || 0) + 1
    if(row.type === 'impression')
      data.impressionCount = (data.impressionCount || 0) + 1
    if(row.type === 'display')
      data.displayCount = (data.displayCount || 0) + 1
    data.loadRate = ((data.loadCount/data.impressionCount)*100).toFixed(1) + '%'
    data.displayRate = ((data.displayCount/data.loadCount)*100).toFixed(1) + '%'
    return data
  }

module.exports = reduce;