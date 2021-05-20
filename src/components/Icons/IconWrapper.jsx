import React from "react";
import { makeStyles } from "@material-ui/core";
import iconStyle from "./Icon.style";
import MuiTheme from "../../styles/MuiTheme";
import HamburgerIcon from "./HamburgerIcon";

const mapTypeToIcon = {
   hamburger: (props) => <HamburgerIcon {...props} />,
};

const useStyles = makeStyles(iconStyle);

const IconWrapper = ({ type, onClick, size, className, ...props }) => {
   const classes = useStyles();

   return mapTypeToIcon[type] ? (
      <div className={`${classes.icon} ${className} `} onClick={onClick}>
         {mapTypeToIcon[type](props)}
      </div>
   ) : (
      <div>icon type doesn't exist</div>
   );
};

export default IconWrapper;
