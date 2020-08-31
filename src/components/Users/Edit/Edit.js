import React from "react";

import "./Edit.scss";

export const Edit = () => {
  return (
    <div className="Edit">
      <div className="buttons">
        <button className="button-edit">
          <i class="fas fa-user-edit"></i> Edit Customer
        </button>
        <button className="button-block">
          <i class="fas fa-user-lock"></i> Block Customer
        </button>
      </div>
      <div className="option">
        <div className="button">
          <label>Subscribed?</label>
          <i class="fas fa-audio-description"></i>
        </div>
        <div className="button">
          <label>Resend Ivitation</label>
          <i class="fas fa-location-arrow"></i>
        </div>
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
    </div>
  );
};
