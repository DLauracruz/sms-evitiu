import React, { useState } from "react";

import "./Options.scss";

export const Options = () => {
  const BUTTONS = [
    "Follow up",
    "Opt in",
    "Reminder",
    "Appointment",
    "Monthly Payment",
    "Renew",
    "Birthday",
  ];
  const [custId, setCustId] = useState(0);
  const onSelected = (id) => {
    setCustId(id);
  };

  return (
    <div className="Options">
      <div className="button">
        <input placeholder="Search..." />
        <div className="btn">
          <i className="fas fa-search"></i>
        </div>
        <button>Neww Template</button>
      </div>
      <div className="btn-option">
        {BUTTONS.map((btn, index) => {
          return (
            <button
              key={index}
              onClick={() => onSelected(index)}
              className={custId === index ? "selected" : ""}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};
