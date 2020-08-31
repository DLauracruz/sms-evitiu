import React, { useState } from "react";
import { UserInfo } from "./UserInfo/UserInfo";
import { UserChat } from "./UserChat/UserChat";
import { Contacts } from "./Contacts/Contacts";

import "./Dashboard.scss";

export const Dashboard = () => {
  const [chatId, setChatId] = useState("");
  const onChildClick = (id) => {
    setChatId(id);
  };

  return (
    <div className="Dashboard">
      <UserInfo chatId={chatId} />
      <UserChat chatId={chatId} />
      <Contacts onChildClick={onChildClick} />
    </div>
  );
};
