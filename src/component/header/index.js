import React from "react";
import GDriveLogo from "../../media/google-drive-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "../../styles//header.css";

const index = ({ userphoto }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={GDriveLogo} />
        <span>Drive</span>
      </div>
      <div className="header-container">
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header-icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userphoto} alt="User Photo" />
      </div>
    </div>
  );
};
export default index;
