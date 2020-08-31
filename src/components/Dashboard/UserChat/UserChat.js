import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { USERS } from "../../service/user-chat";
//* Comandos de Emmet
import "./UserChat.scss";

export const UserChat = ({ chatId }) => {
  const [{ name, phone, messages }, setChat] = useState({});

  if (!chatId) {
    chatId = USERS[0]._id;
  }

  useEffect(() => {
    setChat(R.find(R.propEq("_id", chatId))(USERS));
  }, [chatId]);

  return (
    <div className="UserChat">
      <div className="box-info">
        <img src="https://picsum.photos/200/200" alt="" />
        <div className="info">
          <h3>{name}</h3>
          <label>{phone}</label>
        </div>
        <div className="btn-container">
          <button>PRINT</button>
        </div>
      </div>

      <div className="message">
        {messages &&
          messages.map(({ message, origin }, index) => (
            <p key={index} className={origin}>
              {message}
            </p>
          ))}
      </div>

      <div className="text">
        <div className="send-msg">
          <input placeholder="Text..." />
          <i className="fas fa-location-arrow"></i>
        </div>

        <div className="extra-opt">
          <i className="far fa-images"></i>
          <i className="far fa-bell"></i>
        </div>
      </div>
    </div>
  );
};
