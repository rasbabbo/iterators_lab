var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })

  describe("#min", function () {
    it('should find the minimum value in array', function(){
      //expect(true).to.equal(false);
      expect(Iterators.min([7,3,21])).to.equal(3);
    });
  })

  describe("#each", function() {
    var myArr = [1,2,3,4];
    var x = 0;

    it('should go through every item in arrayand return original', function(){
      Iterators.each(myArr, function(currItem, index){
           x += currItem; 
      });
      expect(x).to.equal(10);
    });
  });

  describe("#map", function() {
    var array1 = [1,2,3,4];
    var newArray = [];

    it('should pass over an array and return a new array', function() {
      var result = Iterators.map(array1, function(taco) {
        return taco * 2;
      })
      expect(result).to.deep.equal([2,4,6,8])
      // expect(true).to.equal(false);
    });
  })
});