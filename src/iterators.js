  
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      };
      return min;
    },
    // reduce: function()

    each: function(numList, action) {
      for (var i = 0; i < numList.length; i++) {
        action(numList[i], i);
      };
      return numList;
    },

    map: function(numList, action) {
      var newArray = [];
      for (var i = 0; i < numList.length; i++) {
        var result = action(numList[i])
        newArray.push(result)
      };
      return newArray;
    },

    filter: function(numList, action) {
      var newArray = [];

      for (var i = 0; i < numList.length; i++) {
        if (function(numList[i])) {
          var result = action(numList[i]);
          newArray = result; 
        };
        newArray.push(result);
      };
      return newArray;
    },

    reduce: function(numList, action) {
      var prevNum = undefined
      for (var i = 0; i < numList.length; i++) {
          prevNum = action(prevNum, numList[i])
      };
      return prevNum
    }




//closing brace for API
  };
  return api;
  // closing brace for function
})();

module.exports = Iterators;


var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
    num * num;
    return Math.sqrt(num);
};

//or

var square = function(num) {
  return Math.abs(num);
}

// var sqrRoot = function(num) {
//     return Math.sqrt(num);
// };


var sqrNumbers = map(myNumbers, square);
// var absNumbers = map(sqrNumbers, sqrRoot);




