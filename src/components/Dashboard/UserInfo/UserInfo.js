import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { USERS } from "../../service/user-chat";

import "./UserInfo.scss";

export const UserInfo = ({ chatId }) => {
  const [{ name, phone, email }, setChat] = useState({});

  if (!chatId) {
    chatId = USERS[0]._id;
  }

  useEffect(() => {
    setChat(R.find(R.propEq("_id", chatId))(USERS));
  }, [chatId]);

  return (
    <div className="UserInfo">
      <img src="https://picsum.photos/200/200" alt="" />

      <div className="info">
        <h3>{name}</h3>
        <label>{phone}</label>
        <label>{email}</label>
      </div>

      <div className="tags">
        <h3>Tags</h3>
        <ul>
          <li>
            <i className="fas fa-tag follow"></i> Follow
          </li>
          <li>
            <i className="fas fa-tag subscribe"></i> Subscribe
          </li>
          <li>
            <i className="fas fa-tag sold"></i> Sold
          </li>
          <li>
            <i className="fas fa-tag new-customer"></i> New Customer
          </li>
        </ul>
      </div>

      <div className="media">
        <h3>Media</h3>

        <div className="files">
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
          <img src="https://picsum.photos/id/237/200/200" alt="img" />
        </div>
      </div>
    </div>
  );
};
