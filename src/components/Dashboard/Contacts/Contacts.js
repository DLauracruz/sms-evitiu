import React, { useState, useEffect } from "react";
import { Card } from "./Card/Card";
import { USERS } from "../../service/user-chat";
import * as R from "ramda";

import "./Contacts.scss";

export const Contacts = ({ showMsg = true, onChildClick }) => {
  const [custId, setCustId] = useState(USERS[0]._id);
  const onCardClick = (id) => {
    setCustId(id);
  };
  const [users, setUsers] = useState(USERS);

  //* Search function
  const [search, setSearch] = useState("");

  const handleChange = (input) => {
    const value = String(input.target.value).toLowerCase().trim();
    setSearch(value);
  };

  //* New Array
  useEffect(() => {
    const searchByName = (n) =>
      String(n.name).toLowerCase().trim().includes(search);

    setUsers(R.filter(searchByName, USERS));
  }, [search]);

  return (
    <div className="Contacts">
      <input placeholder="Search..." onChange={handleChange} />

      <div className="buttons">
        <button>
          <i className="btn-colo fas fa-plus"></i>
        </button>
        <button>
          <i className="btn-color fas fa-user-plus"></i>
        </button>
      </div>

      <div className="cards">
        {users.map((user) => (
          <Card
            key={user._id}
            showMsg={showMsg}
            user={user}
            custId={custId}
            onCardClick={onCardClick}
            onChildClick={onChildClick}
          />
        ))}
      </div>
    </div>
  );
};
