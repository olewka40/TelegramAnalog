import React from "react";
import "./index.css";
import { ImgAvatar } from "../../styles/styles"
import { UserName } from "../../styles/styles"
import Button from "@material-ui/core/Button";
import {Search,Menu} from "@material-ui/icons";
import {TextField} from "@material-ui/core";
import { Icon } from 'antd';


class Dialog extends React.Component {
  render() {
    return (
      <div className="dialog">
        <div className="dialogMenu">
            <UserName> </UserName>

            <TextField className="textField"
                       style={{}}
                       id="outlined-name"
                       variant="outlined"
            />
            <Button  size="small" color="primary">  <Search color="primary" style={{ fontSize: '30px' ,  }} /></Button>
            <Button size="small" color="primary"> <Menu color="primary" style={{ fontSize: '30px' ,  }} />  </Button>

        </div>


        <div className="messages">
          <ImgAvatar src="{this.state.userAvatar}"></ImgAvatar>
          <h1>   </h1>
        </div>


          <div className="dialogFooter">
              <Button  size="small" color="primary"> <Icon style={{ fontSize: '30px', }} type="paper-clip" /></Button>
              <TextField className="textField"
                         style={{}}
                         id="outlined-name"
                         variant="outlined"
              />
              <Button  size="small" color="primary">  <Icon style={{ fontSize: '30px', }} type="smile" /></Button>
              <Button  size="small" color="primary">  <Icon style={{ fontSize: '30px', }} type="message" /></Button>

          </div>

      </div>
    );
  }
}
export default Dialog;

