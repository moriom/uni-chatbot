const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config/keys");
const ngrok = require("ngrok");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const PRODUCTION = "production";

//Models
require('./models/feedback');

//Routes
const dialogFlowRoutes = require("./routes/dialogFlow");
const fulfillmentRoutes = require("./routes/fulfillment");

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({ hello: "there" });
});

app.use(dialogFlowRoutes);
app.use(fulfillmentRoutes);

if (process.env.NODE_ENV === PRODUCTION) {
  // js and css files
  app.use(express.static("client/build"));
  // index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const tunnelToNgrok = async (port) => {
  const ngrokUrl = await ngrok.connect(port);
  console.log(`Please update ngrok url at dialogflow webhook`, ngrokUrl);
};

const listen = function () {
  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
    if (config.ngrok) {
      tunnelToNgrok(PORT);
    }
  });
};

const dbConnect = function() {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', dbConnect)
        .once('open', listen);
    return mongoose.connect(config.dbUrl, { keepAlive: 1, useNewUrlParser: true });
};
if(config.dbConnect){
  dbConnect(); // Connect to db first then start listening port
} else {
  listen(); // Only listening port
}