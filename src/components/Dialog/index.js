import React from "react";
import "./index.css";
import { ImgAvatar } from "../../styles/styles"
import { UserName } from "../../styles/styles"

class Dialog extends React.Component {
  render() {
    return (
      <div className="dialog">
        <div>
          <UserName> </UserName>
        </div>
        <div className="messages">
          <ImgAvatar src=""></ImgAvatar>
          <h1>   </h1>
        </div>
      </div>
    );
  }
}
export default Dialog;

