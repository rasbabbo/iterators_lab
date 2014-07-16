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
    it('should go through every item in array', function(){
      expect(Iterators.each([7,3,21])).to.equal([7,3,21]);
    });
  })
})