# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kellyatmore/lotide`

**Require it:**

`const _ = require('@kellyatmore/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `without(...)`: Return a new array with only those elements from source that are not present in the itemsToRemove array
* `takeUntil(...)`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `tail(...)`: Returns every element except for the first, of an array
* `middle(...)`: Returns the middle-most element(s) of the given array
* `map(...)`: Returns a new array based on the results of the callback function
* `letterPositions(...)`: Returns all the indices (zero-based positions) in the string where each character is found
* `head(...)`: Retrieves the first element from the array
* `findKeyByValue(...)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value.
* `findKey(...)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value
* `eqObjects(...)`: Takes in two objects and returns true or false, based on a perfect match
* `eqArrays(...)`: Compares two arrays for a perfect match
* `countOnly(...)`: Returns counts for a specific subset of items
* `countLetters(...)`: Returns a count of each of the letters in a sentence

