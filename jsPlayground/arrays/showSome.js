/**
 * Every and then some:
 *  - Arrays also come with the standard methods 'every' and 'some'. Both take a predicate function
 *  	that, when called with an array element as argument, returns true or false. Just like &&
 *  	returns a true value only when the expressions on both sides are true, every returns true
 *  	only when the predicate returns true for all elements of the array. Similarly, some returns
 *  	true as soon as the predicate returns true for any of the elements. They do not process more
 *  	elements than necessary—for example, if some finds that the predicate holds for the first
 *  	element of the array, it will not look at the values after that
 *  - Write two functions, every and some, that behave like these methods, except that they take
 *  	the array as their first argument rather than being a method
 *
 * Predicate functions:
 *  - is a function that returns true or false based on some condition. In this problem, we’re using
 *  	isNaN(testValue), which returns true if testValue is NaN (remember this means not a number),
 *  	and false otherwise
 *
 * .some():
 * 	- stops looping the first time the iterator returns true or something truthy
 */

/* eslint-disable */
'use strict';

// shows how the build-in .some() method works
// if some of the array elements have typeOf value in array return boolean
function showSome(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    // If the element satisfies the predicate, return true
    if (predicate(array[i])) {
      return true;
    }
  }
  // If we get all the way to the end, none of the predicates function pass
  return false;
}

console.log('showing how the some() method works internally: ' + showSome([NaN, 3, 4], isNaN)); // true
console.log('showing how the some() method works internally: ' + showSome([2, 3, 4], isNaN)); // false
console.log('------------------------');

// function to verify if element is string or not
function isAString(a) {
  if (typeof a === 'string') {
    return true;
  }
}

console.log('showing how the some() method works internally: ' + showSome(['hi', 'bonjour', 'hola'], isAString)); // true
console.log('showing how the some() method works internally: ' + showSome(['hi', 'bonjour', 'hola', 2], isAString)); // true
console.log('------------------------');
// showing how to use the built-in .every() & .some() method
console.log(['hi', 'bonjour', 'hola'].some(isAString)); // true
console.log(['hi', 'bonjour', 'hola', 2].some(isAString)); // true
console.log('------------------------');
console.log(['hi', 'bonjour', 'hola'].some(isNaN)); // false
console.log([1, 2, 3, 'hi', 'bonjour', 'hola'].some(isNaN)); // true
