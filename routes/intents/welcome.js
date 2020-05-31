const config = require("../../config/keys");

const welcome = (agent, req, res) => () => {
  let body = req.body.queryResult.parameters;
  console.log("req", body);
  agent.add(config.welcomeText || "Hi, How may I help you?");
};

module.exports = welcome;
