const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🙂🙂🙂Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let arr = sentence.toLowerCase().replace(/\s/g, '').split(' ');
  
  for (let i = 0; i < arr.length; i++) {
    results[arr[i]] = {};
    for (let j = 0; j < arr[i].length; j++) {
      if (!results[arr[i]][arr[i][j]]) {
        results[arr[i]][arr[i][j]] = 1;
      } else {
        results[arr[i]][arr[i][j]]++;
      }
    }
  } return results;
};

  
assertArraysEqual(letterPositions("hello"), [1]);
assertArraysEqual(letterPositions("kelly"), [1]);
assertArraysEqual(letterPositions("coding"), [1]);

console.log(letterPositions("hello"));
console.log(letterPositions("developer"));
console.log(letterPositions("Kelly"));
console.log(letterPositions("MmDddDeeeE"));