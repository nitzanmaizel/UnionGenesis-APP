import React from "react";
import { Grid, Drawer } from "@material-ui/core";

import IconWrapper from "../../Icons/IconWrapper";
import SideBar from "../SideBar/SideBar";

import { makeStyles } from "@material-ui/core";
import MuiStyleFunction from "./Header.styles.js";
import useHeader from "./Header.logic.js";

const useStyles = makeStyles(MuiStyleFunction);

const Header = () => {
   const classes = useStyles();
   const { isOpen, toggleDrawer } = useHeader();
   return (
      <>
         <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.Header}>
            <div className={classes.Header_wrapper}>
               <div className={classes.Header_icon} onClick={toggleDrawer}>
                  <IconWrapper type="hamburger" size={26} />
               </div>
               <div className={classes.Header_icon}>
                  <IconWrapper type="logo" />
               </div>
               <div className={classes.Header_icon}>
                  <IconWrapper type="search" />
               </div>
            </div>
         </Grid>
         <Drawer style={{ zIndex: 4000 }} open={isOpen} onClose={toggleDrawer}>
            <SideBar />
         </Drawer>
      </>
   );
};

export default Header;
