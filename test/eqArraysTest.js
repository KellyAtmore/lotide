const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["hello", "goodbye"], ["hello", "goodbye"]), true);