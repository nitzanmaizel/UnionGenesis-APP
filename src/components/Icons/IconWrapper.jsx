import React from "react";
import { makeStyles } from "@material-ui/core";
import iconStyle from "./Icon.style";
import MuiTheme from "../../styles/MuiTheme";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import LogoIcon from "./LogoIcon";

const mapTypeToIcon = {
   hamburger: (props) => <HamburgerIcon {...props} />,
   search: (props) => <SearchIcon {...props} />,
   logo: (props) => <LogoIcon {...props} />,
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
