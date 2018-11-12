var constant = require('./constant');
var reduce = function(row, memo) {
    if(row.type === constant.LOAD){
      memo.load = (memo.load || 0) + 1;
     
    }
    if(row.type === constant.IMPRESSION){
      memo.impression = (memo.impression || 0) +1
    }
  
    if(row.type === constant.DISPLAYS){
      memo.display = (memo.display || 0) +1
    }
  
    memo.loadRate = (memo.load/memo.impression)
    memo.displayRate = (memo.display/memo.load)
    return memo
  
  }

module.exports = reduce;