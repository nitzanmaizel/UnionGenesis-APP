import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Avatar, BottomNavigation, BottomNavigationAction, Grid } from "@material-ui/core";
import IconWrapper from "../../Icons/IconWrapper";
import text from "../../../styles/text";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      width: "100%",
      position: "absolute",
      background: "#F8F8F8",
      color: theme.paletteFixed.primary.dark,
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
}));

const BottomNav = ({ userData }) => {
   const classes = useStyles();
   let history = useHistory();
   const [value, setValue] = useState(0);
   console.log(userData, "userData");

   const handleChange = (event, newValue) => {
      if (newValue === undefined || newValue === null) return;
      setValue(newValue);

      switch (newValue) {
         case 0:
            history.push("/");
            break;
         case 1:
            history.push("/map");
            break;
         case 2:
            history.push("/chat");
            break;
         case 3:
            history.push("/challenge");
            break;
         case 4:
            history.push("/profile");
            break;
         default:
            break;
      }
   };

   return (
      <Grid container item xs={12} sm={8} md={6} lg={6} className={classes.root}>
         <BottomNavigation showLabels value={value} onChange={(e, newValue) => handleChange(e, newValue)}>
            <BottomNavigationAction label={text.bottomNav.home} icon={<IconWrapper type="home" />} />
            <BottomNavigationAction label={text.bottomNav.map} icon={<IconWrapper type="location" />} />
            <BottomNavigationAction label={text.bottomNav.chat} icon={<IconWrapper type="chat" />} />
            <BottomNavigationAction label={text.bottomNav.challenge} icon={<IconWrapper type="challenge" />} />
            <BottomNavigationAction label={text.bottomNav.profile} icon={<Avatar src={userData.profileImage} />} />
         </BottomNavigation>
      </Grid>
   );
};

export default BottomNav;
