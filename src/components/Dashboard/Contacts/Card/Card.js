import React from "react";

import "./Card.scss";

export const Card = ({
  showMsg,
  user: { _id, name, phone, messages },
  onChildClick,
  onCardClick,
  custId,
}) => {
  return (
    <div
      className={custId === _id ? "Card selected" : "Card"}
      onClick={() => {
        onChildClick(_id);
        onCardClick(_id);
      }}
    >
      <img src="https://picsum.photos/200/200" alt="" />

      <div className="info">
        <h3>{name}</h3>
        <label>{phone}</label>
        {showMsg && <p className="truncate-overflow">{messages[0].message}</p>}
      </div>
    </div>
  );
};
