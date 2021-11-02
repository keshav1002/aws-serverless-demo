"use strict";

const calculator = require("./lib/calculator");
const helper = require('./lib/helper');

const addTwoNumbers = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  calculator.addTwoNumbers(helper.parseEvent(event), callback);
};

module.exports = {
  addTwoNumbers
};
