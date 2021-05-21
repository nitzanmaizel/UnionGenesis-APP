import React from "react";
import { makeStyles } from "@material-ui/core";
import iconStyle from "./Icon.style";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import LogoIcon from "./LogoIcon";
import HomeIcon from "./HomeIcon";
import LocationIcon from "./LocationIcon";
import ChatIcon from "./ChatIcon";
import ChallengeIcon from "./ChallengeIcon";

const mapTypeToIcon = {
   hamburger: (props) => <HamburgerIcon {...props} />,
   search: (props) => <SearchIcon {...props} />,
   logo: (props) => <LogoIcon {...props} />,
   home: (props) => <HomeIcon {...props} />,
   location: (props) => <LocationIcon {...props} />,
   chat: (props) => <ChatIcon {...props} />,
   challenge: (props) => <ChallengeIcon {...props} />,
};

const useStyles = makeStyles(iconStyle);

const IconWrapper = (props) => {
   const classes = useStyles();

   return mapTypeToIcon[props.type] ? (
      <div className={`${classes.icon} ${props.className} `} onClick={props.LogoIcononClick}>
         {mapTypeToIcon[props.type](props)}
      </div>
   ) : (
      <div>icon type doesn't exist</div>
   );
};

export default IconWrapper;
