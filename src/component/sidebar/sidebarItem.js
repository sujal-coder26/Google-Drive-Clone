import React from "react";
import "../../styles/sidebarItem.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
const SidebarItem = ({ arrow, icon, label }) => {
  return (
    <div className="sidebar-items">
      <div className="sidebar-item-arrow">{arrow && <ArrowRightIcon />}</div>
      <div className="sidebar-item-main">
        {icon}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
