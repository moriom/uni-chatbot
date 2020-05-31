const config = require("../../config/keys");
const mongoose = require('mongoose');
const Feedback = mongoose.model('Feedback');

const index = (agent, req, res) => async () => {
  // console.log("req", req.body);
  let body = req.body.queryResult.parameters;
  console.log("Query Body",body);
  try {
    let feedback = new Feedback(body); //{email: 'demo@email.com', phone: "01710122133", message: "Message from user"}
    await feedback.save();
    return  agent.add(config.feedbackText || "Thank you, We will let you know if we get further query.");
  } catch (err) {
    console.log(err.message, err);
  }
  agent.add("Sorry! We are facing an unknown error. Please try again later.");
};

module.exports = index;
