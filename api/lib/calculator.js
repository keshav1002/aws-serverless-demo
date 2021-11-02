"use strict";
const { responseObj } = require("./helper.js");

module.exports.addTwoNumbers = async (event, cb) => {
  let {
    data: { firstNumber = null, secondNumber = null }
  } = event;
  try {
    if (
      firstNumber &&
      secondNumber &&
      typeof firstNumber === "number" &&
      typeof secondNumber === "number"
    ) {
      cb(null, responseObj({ answer: firstNumber + secondNumber }, 200));
    } else {
      cb(
        null,
        responseObj(
          { message: "Required parameters missing or not valid" },
          500
        )
      );
    }
  } catch (e) {
    console.error(e);
    cb(null, responseObj(e.message, 500));
  }
};
