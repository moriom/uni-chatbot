module.exports = {
  googleProjectID: process.env.GOOGLE_PROJECT_ID,
  dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
  dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
  googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  googlePrivateKey:  process.env.GOOGLE_PRIVATE_KEY, //JSON.parse()
  dbUrl:  process.env.MONGODB_URI,
  dbConnect: true,
  feedbackText: process.env.feedbackText,
  welcomeText: process.env.welcomeText
};
