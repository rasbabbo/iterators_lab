# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function` -- the highest level of functions; in a cascading order--


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max` - returns the highest in an array; 
* 
* `min`  Returns the minimum value in array. If an iterator function is provided, it will be used on each value to generate the criterion by which the value is ranked.
* `each`- each iterator goes through each item in the array; example would be returning the values of the array using console.log
* `map`-  clones the values to a new array/ maintains the original array; non-destructive; creates a new array based on the function each item in an array and returns the results in a new array.  example: takes original array, performs function and returns new array without altering the first one.  [1,2,3] +1 would stay the same but [2,3,4] would be the created array
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - compund valuse in an array into a single value ie- [dog, gone] becomes [doggone]

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - 
will reduce all numbers to a single number
     array.reduce(function(agg, currentItem) {
          return agg * currItem;
}
* `reject`: [note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




