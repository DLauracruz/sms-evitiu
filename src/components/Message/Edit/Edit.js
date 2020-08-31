import React from "react";

import "./Edit.scss";

export const Edit = () => {
  return (
    <div className="Edit">
      <div className="buttons">
        <button className="button-edit">Edit Template</button>
        <button className="button-delete">Delete Template</button>
      </div>
      <label>Send you SMS here! Search your contact!</label>
      <div className="btn-buscar">
        <input placeholder="Search..."></input>
        <div className="sc">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="search">
        <div className="flik">
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Courtney Henry</h4>
          <i className="fas fa-times"></i>
        </div>
        <button>
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
    </div>
  );
};
