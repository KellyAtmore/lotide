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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  if (eqArrays(object1, object2)) {
    console.log(`🙂🙂🙂Assertion Passed: [${object1}] === [${object2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${object1}] !== [${object2}]`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false