import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = () => {
  return (
    <div className="message">
      <Avatar src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" />
      <div className="message__info">
        <h4>
          Sensussama
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
        <p>This is message</p>
      </div>
    </div>
  );
};

export default Message;
