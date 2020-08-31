import React, { useState } from "react";

import { Contacts } from "../Dashboard/Contacts/Contacts.js";
import { Edit } from "./Edit/Edit.js";
import { Notes } from "./Notes/Notes.js";

import "./Users.scss";

export const Users = () => {
  const [chatId, setChatId] = useState("");
  const onChildClick = (id) => {
    setChatId(id);
  };
  return (
    <div className="Users">
      <div className="components Contacts">
        <Contacts showMsg={false} onChildClick={onChildClick} />
      </div>
      <div className="components Notes">
        <Notes chatId={chatId} />
      </div>
      <div className="components Edit">
        <Edit />
      </div>
    </div>
  );
};
