const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: [${actual}] !== [${expected}]`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["hello", "goodbye"], ["hello", "goodbye"]), true);