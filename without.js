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

const without = function(source, itemsToBeRemoved) {
  const newArray = source.filter(element => !itemsToBeRemoved.includes(element));

  return newArray;
  
};

assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);