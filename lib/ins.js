'use strict';

const product = function () {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
};

const max = function () {
  let result = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (result < arguments[i]) {
      result = arguments[i];
    }
  }

  return result;
};

const arrayTimes2 = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * 2;
  }

  return result;
};

const addProperty = function (obj, prop, val) {
  obj.prop = val; // Wrong!
  // obj['prop'] = val; // Because this!

  obj[prop] = val;
};

// test value using predicate and change using mutator if true
const transform = function (value, predicate, mutator) {
  if (predicate(value)) {
    return mutator(value);
  }

  return value;
};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
