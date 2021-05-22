import React from "react";
import BellIcon from "./BellIcon";
import BookmarkIcon from "./BookmarkIcon";
import ChatIcon from "./ChatIcon";
import ChallengeIcon from "./ChallengeIcon";
import ContactIcon from "./ContactIcon";
import ClipboardIcon from "./ClipboardIcon";
import EditIcon from "./EditIcon";
import ExitIcon from "./ExitIcon";
import HamburgerIcon from "./HamburgerIcon";
import HomeIcon from "./HomeIcon";
import LocationIcon from "./LocationIcon";
import LogoIcon from "./LogoIcon";
import NotePadIcon from "./NotePadIcon";
import SearchIcon from "./SearchIcon";
import ShareIcon from "./ShareIcon";

import { makeStyles } from "@material-ui/core";
import iconStyle from "./Icon.style";

const mapTypeToIcon = {
   bell: (props) => <BellIcon {...props} />,
   bookmark: (props) => <BookmarkIcon {...props} />,
   challenge: (props) => <ChallengeIcon {...props} />,
   chat: (props) => <ChatIcon {...props} />,
   contact: (props) => <ClipboardIcon {...props} />,
   clipboard: (props) => <ContactIcon {...props} />,
   edit: (props) => <EditIcon {...props} />,
   exit: (props) => <ExitIcon {...props} />,
   hamburger: (props) => <HamburgerIcon {...props} />,
   home: (props) => <HomeIcon {...props} />,
   location: (props) => <LocationIcon {...props} />,
   logo: (props) => <LogoIcon {...props} />,
   notepad: (props) => <NotePadIcon {...props} />,
   search: (props) => <SearchIcon {...props} />,
   share: (props) => <ShareIcon {...props} />,
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
