import React from "react";
import "./index.css";
import Logo from "../../images/Logo.png"

class Header extends React.Component {
  render() {
    return (
      <div className="header">

          <img align="center"  src={Logo} alt="CompanyLogo" className="logo" />
          <b className="welcome">Welcome to DarkMessage</b>
      </div>
    );
  }
}
export default Header;

