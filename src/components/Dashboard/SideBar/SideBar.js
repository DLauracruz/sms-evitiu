import React from "react";

import { Link } from "react-router-dom";

import "./SideBar.scss";

export const SideBar = () => {
  return (
    <div className="SideBar">
      <img src="https://picsum.photos/200/200" alt="" />

      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-comment-alt"></i>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fas fa-users"></i>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <i className="fas fa-file-alt"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
