import React from "react";

import { Options } from "./Options/Options.js";
import { Text } from "./Text/Text.js";
import { Edit } from "./Edit/Edit.js";

import "./Message.scss";

export const Message = () => {
  return (
    <div className="Message">
      <div className="components Options">
        <Options />
      </div>
      <div className="components Text">
        <Text />
      </div>
      <div className="components Edit">
        <Edit />
      </div>
    </div>
  );
};
