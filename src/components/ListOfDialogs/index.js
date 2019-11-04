import React from "react";
import "./index.css";
import { UserName } from "../../styles/styles";
import { ImgAvatar } from "../../styles/styles";
import { SenderName } from "../../styles/styles";
import { Menu , Lock }  from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';


class Dialog extends React.Component {
  render() {
    return (
      <div className="listOfDialog">
              <div className="navBar">

                  <Button size="small" color="primary"> <Menu color="primary" style={{ width:25 ,  }} />  </Button>
                  <Input className="input" />
                  <Button size="small" color="primary">  <Lock color="primary" style={{ fontSize: 25 ,  }} /></Button>
              </div>
          <div className="dialogs">
              <ImgAvatar src="" className="avatar" ></ImgAvatar>
              <UserName className="UserName">UserName</UserName>
              <b>
                  <SenderName> name sender   </SenderName>
                    message
              </b>
          </div>


      </div>
    );
  }
}
export default Dialog;

