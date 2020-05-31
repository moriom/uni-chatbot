const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const intents = require("./intents");
const router = express.Router();

router.post("/", (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });
  const intentMap = intents(agent, req, res);
  agent.handleRequest(intentMap);
});

module.exports = router;
