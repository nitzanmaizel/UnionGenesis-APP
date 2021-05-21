import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Avatar } from "@material-ui/core";

import IconWrapper from "../../Icons/IconWrapper";
import AppText from "../../../styles/AppText";
import AppColors from "../../../styles/AppColors";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      width: "100%",
      position: "absolute",
      background: "#F8F8F8",
      color: theme.palette.primary.dark,
      minHeight: 90,
      boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
      bottom: 0,

      "& .MuiBottomNavigation-root": {
         flexGrow: 1,
         minHeight: 90,
         padding: 0,
      },
      "& .MuiBottomNavigationAction-label": {
         position: "absolute",
         bottom: 1,
         fontSize: 16,
         fontWeight: "bold",
      },
      "& .MuiBottomNavigationAction-root": {
         padding: 0,
         alignSelf: "center",
      },
      "& .MuiBottomNavigationAction-wrapper": {
         marginBottom: 24,
      },
   },
   BottomNav_Container: {
      minWidth: "100%",
      display: "flex",
      justifyContent: "space-around",
      // position: "absolute",
      // bottom: 0,
   },
   BottomNav_Icon_Wrapper: {
      display: "flex",
      flexDirection: "column",
   },
   BottomNav_Icon_label: {
      textAlign: "center",
      fontSize: 16,
   },
}));

const BottomNav = ({ userData }) => {
   const classes = useStyles();
   let history = useHistory();

   const handleOnClick = (e) => {
      let targetURL = e.currentTarget.getAttribute("name");
      if (targetURL === "home") history.push("/");
      else history.push(`/${targetURL}`);
   };

   return (
      <div className={classes.BottomNav_Container}>
         <div name={"home"} className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
            <IconWrapper type="home" color={history.location.pathname === "/" ? AppColors.primary : AppColors.dark} />
            <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.home}</span>
         </div>
         <div name="chat" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
            <IconWrapper type="chat" color={history.location.pathname === "/chat" ? AppColors.primary : AppColors.dark} />
            <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.chat}</span>
         </div>
         <div name="map" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
            <IconWrapper type="location" color={history.location.pathname === "/map" ? AppColors.primary : AppColors.dark} />
            <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.map}</span>
         </div>
         <div name="challenge" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
            <IconWrapper
               type="challenge"
               color={history.location.pathname === "/challenge" ? AppColors.primary : AppColors.dark}
            />
            <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.challenge}</span>
         </div>
         <div name="profile" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
            <Avatar
               src={userData.isLoggedIn ? userData.profileImage : ""}
               color={history.location.pathname === "/profile" ? AppColors.primary : AppColors.dark}
               style={{ height: 40, width: 40 }}
            />
            <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.profile}</span>
         </div>
      </div>
   );
};

export default BottomNav;
