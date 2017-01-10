'use strict';

const createArray = function (length, defaultValue) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = defaultValue;
  }

  return result;
};

const arrayTransform = function (array, predicate, mutator) {
  return array.map(e => predicate(e) ? mutator(e) : e);
};

const createPerson = function (givenName, familyName, bornOn, height,
 weight, eyeColor) {
  return {
    givenName,
    familyName,
    bornOn,
    height,
    weight,
    eyeColor,
  };
};

const memoFactory = function (memo) {
  let rememberMe = memo;
  return function () {
    return rememberMe;
  };
};

const counterFactory = function () {
  let count = 0;
  return function () {
    return count++;
  };
};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
