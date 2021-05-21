import React from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import IconWrapper from "../../Icons/IconWrapper";

const useStyles = makeStyles((theme) => ({
   Header: {
      display: "flex",
      minWidth: "100%",
      margin: "auto",
      zIndex: 1100,
      height: 80,
      backgroundColor: "#F8F8F8",
      boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
   },
   Header_wrapper: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-between",
   },
   Header_icon: {
      padding: 15,
   },
}));

const Header = () => {
   const classes = useStyles();

   return (
      <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.Header}>
         <div className={classes.Header_wrapper}>
            <div className={classes.Header_icon}>
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
   );
};

export default Header;
