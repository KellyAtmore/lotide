const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🙂🙂🙂Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

//TESTING
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');
const data3 = ["Arctic Monkeys", "The Strokes", "Tame Impala", "Grizzly Bear"];
const results3 = takeUntil(data3, x => x === 'Tame Impala');
console.log(results2);



assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data3, x => x === 'Tame Impala'), ["Arctic Monkeys", "The Strokes"]);
