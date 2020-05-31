import React from "react";

const Info = () => (
  <div className="card">
    <div className="card-image" style={{ heigth: "150px" }}>
      <img src="bot.png" alt="bot" />
      <span className="card-title">Chatbot!</span>
    </div>
    <div className="card-content">
      <p>
        Student ID: Moriom Jim
        <br /> This is a simple chatbot built using DialogFlow and NodeJS and MongoDB. You can try
        asking it questions about academics, upcoming events, funding, tuition fee, exam, class, credit etc.
        You can also ask the bot to take feedback from you to improve it at next version.
       </p>
    </div>
  </div>
);

export default Info;
