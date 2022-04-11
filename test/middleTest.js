const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3]),[1,2]);
assertArraysEqual(middle([1, 5, 6, 4], [1, 2, 3, 4, 6, 4, 3,]),[5,6]);
assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3,]),[2,3]);
assertArraysEqual(middle([7, 8, 9, 10, 5], [1, 2, 3, 4, 6, 4, 3,]),[9,10]);