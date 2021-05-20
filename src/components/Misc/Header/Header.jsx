import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const title = false;

const useStyles = makeStyles((theme) => ({
   Header: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%",
      margin: "auto",
      zIndex: 1100,
      left: 0,

      "& Header": {
         backgroundColor: "#F8F8F8",
         boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
      },
      boxShadow: !!title ? "0px 4px 40px rgba(25, 25, 25, 0.1)" : null,
   },
   Header_Toolbar: {
      display: "flex",
      justifyContent: "center",
      height: 80,
      alignItems: "center",
   },
}));

const Header = () => {
   const classes = useStyles();

   return (
      <Grid container item xs={12} sm={8} md={6} lg={6} className={classes.Header} id="navbar">
         <AppBar position="static" elevation={0}>
            <Toolbar className={classes.Header_Toolbar}></Toolbar>
         </AppBar>
      </Grid>
   );
};

export default Header;
