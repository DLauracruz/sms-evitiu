import React from "react";
import SideBar from "../Dashboard/SideBar/SideBar";
import { Dashboard } from "../Dashboard/Dashboard";
import { Users } from "../Users/Users";
import { Message } from "../Message/Message";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./AppRouter.scss";

export const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Router>
        <nav className="navbar">
          <SideBar />
        </nav>

        <div className="router">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/message" component={Message} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
