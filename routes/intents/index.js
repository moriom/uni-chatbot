const welcome = require("./welcome");
const feedback = require("./feedback");

module.exports = function (agent, req, res) {
  const intentMap = new Map();

  intentMap.set("welcome", welcome(agent, req, res));
  intentMap.set("feedback", feedback(agent, req, res));

  return intentMap;
};
