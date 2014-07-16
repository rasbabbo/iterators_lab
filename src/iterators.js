
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




  };
  return api;
})();

module.exports = Iterators;




