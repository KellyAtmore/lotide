const eqObjects = function(object1, object2) {

  const key1 = Object.keys(object1);
  //console.log(key1);
  const key2 = Object.keys(object2);
  //console.log(key2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    //console.log("key:", key, "valueA:", object1[key], "valueB:", object2[key]);
    if (Array.isArray(object1[key])) {
      const value1 = object1[key];
      const value2 = object2[key];
      
      //console.log("value1", value1);
      //console.log("is true?", eqArrays(value1, value2));
      if (!eqArrays(value1, value2)) {
        return false;
      }
    //console.log(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
    
  }
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  // comparing each element of array
  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {
      return false;
    }
      
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(object1, object2)) {
    console.log(`πππAssertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
  } else {
    console.log(`πππ Assertion Failed: [${inspect(object1)}] !== [${inspect(object2)}]`);
  }
};



// -- tests obs w primitives --
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

// -- tests objs w arrays --
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false