const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let result = false;
    
    // comparing each element of array
    for (let i = 0; i < array1.length; i++) {

      if (array1[i] !== array2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🙂🙂🙂Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(arr) {
  if ((arr.length === 1) || (arr.length === 2))
    return [];
  
  const mid = arr.length / 2;
  
  if (arr.length % 2 === 1) {
  
    return arr[Math.floor(mid)];
    
  } else {
    return [
      arr[mid - 1],
      arr[mid],];
  }
};
  
assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3]),[1,2]);
assertArraysEqual(middle([1, 5, 6, 4], [1, 2, 3, 4, 6, 4, 3,]),[5,6]);
assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3,]),[2,3]);
assertArraysEqual(middle([7, 8, 9, 10, 5], [1, 2, 3, 4, 6, 4, 3,]),[9,10]);





