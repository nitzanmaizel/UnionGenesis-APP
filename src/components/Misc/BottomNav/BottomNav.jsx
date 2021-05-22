import React from "react";
import { Avatar, Grid } from "@material-ui/core";

import IconWrapper from "../../Icons/IconWrapper";

import { makeStyles } from "@material-ui/core/styles";
import MuiStyleFunction from "./BottomNav.styles";
import AppColors from "../../../styles/AppColors";
import AppText from "../../../styles/AppText";
import useBottomNav from "./BottomNav.logic";

const useStyles = makeStyles(MuiStyleFunction);

const BottomNav = ({ userData }) => {
   const classes = useStyles();

   const { handleOnClick, locationPath } = useBottomNav();

   return (
      <Grid container item xs={12} sm={8} md={6} lg={6} className={classes.BottomNav_Container}>
         <div className={classes.BottomNav_Wrapper}>
            <div name={"home"} className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
               <IconWrapper type="home" color={locationPath === "/" ? AppColors.primary : AppColors.dark} />
               <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.home}</span>
            </div>
            <div name="map" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
               <IconWrapper type="location" color={locationPath === "/map" ? AppColors.primary : AppColors.dark} />
               <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.map}</span>
            </div>
            <div name="chat" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
               <IconWrapper type="chat" color={locationPath === "/chat" ? AppColors.primary : AppColors.dark} />
               <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.chat}</span>
            </div>
            <div name="challenge" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
               <IconWrapper type="challenge" color={locationPath === "/challenge" ? AppColors.primary : AppColors.dark} />
               <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.challenge}</span>
            </div>
            <div name="profile" className={classes.BottomNav_Icon_Wrapper} onClick={(e) => handleOnClick(e)}>
               <Avatar
                  src={userData.isLoggedIn ? userData.profileImage : ""}
                  color={locationPath === "/profile" ? AppColors.primary : AppColors.dark}
                  style={{ height: 40, width: 40 }}
               />
               <span className={classes.BottomNav_Icon_label}>{AppText.bottomNav.profile}</span>
            </div>
         </div>
      </Grid>
   );
};

export default BottomNav;
