import React, { useEffect, useState } from "react";
import * as R from "ramda";
import "./Notes.scss";

import { USERS } from "../../service/user-chat";

export const Notes = ({ chatId }) => {
  const [{ name, phone, email }, setChat] = useState({});

  if (!chatId) {
    chatId = USERS[0]._id;
  }

  useEffect(() => {
    setChat(R.find(R.propEq("_id", chatId))(USERS));
  }, [chatId]);

  return (
    <div className="Notes">
      <div className="box-info">
        <img src="https://picsum.photos/id/237/200/300" alt="img" />
        <div className="info">
          <h3>{name}</h3>
          <label>{phone}</label>
          <label>{email}</label>
        </div>
      </div>
      <div className="notes">
        <h3>Notes</h3>
        <div className="note-card">
          <i class="far fa-sticky-note"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            itaque expedita voluptates in reprehenderit maiores.
          </p>
        </div>
        <div className="note-card">
          <i class="far fa-sticky-note"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            itaque expedita voluptates in reprehenderit maiores.
          </p>
        </div>
        <div className="note-card">
          <i class="far fa-sticky-note"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            itaque expedita voluptates in reprehenderit maiores.
          </p>
        </div>
        <div className="note-card">
          <i class="far fa-sticky-note"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            itaque expedita voluptates in reprehenderit maiores.
          </p>
        </div>
      </div>
    </div>
  );
};
