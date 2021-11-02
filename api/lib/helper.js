"use strict";

const parseEvent = function (event) {
  return {
    path: event.path,
    data: JSON.parse(event.body),
    method: event.httpMethod,
    pathParams: event.pathParameters,
    queryParams: event.queryStringParameters
  };
};

const responseObj = (data, statusCode) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(data)
  };
};

module.exports = {
  parseEvent,
  responseObj
};
