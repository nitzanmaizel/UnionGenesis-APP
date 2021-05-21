import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   BottomNav_container: {
      display: "flex",
      minWidth: "100%",
      margin: "auto",
      zIndex: 1100,
      height: 80,
      backgroundColor: "#F8F8F8",
      boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
      position: "absolute",
      bottom: 0,
   },
   BottomNav_Icon_Wrapper: {
      display: "flex",
   },
}));

const TestBottomNav = () => {
   const classes = useStyles();
   let history = useHistory();

   const handleChange = (event, newValue) => {
      if (newValue === undefined || newValue === null || !event) return;
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
      <div className={classes.BottomNav_Icon_Wrapper}>
         <div>
            <IconWrapper type="home" color={history.location.pathname === "/" ? AppColors.primary : AppColors.dark} />
         </div>
         <div>
            <IconWrapper type="chat" color={history.location.pathname === "/chat" ? AppColors.primary : AppColors.dark} />
         </div>
         <div>
            <IconWrapper type="location" color={history.location.pathname === "/map" ? AppColors.primary : AppColors.dark} />
         </div>
         <div>
            <IconWrapper
               type="challenge"
               color={history.location.pathname === "/challenge" ? AppColors.primary : AppColors.dark}
            />
         </div>
         <div>
            <Avatar
               src={userData.isLoggedIn ? userData.profileImage : ""}
               color={history.location.pathname === "/profile" ? AppColors.primary : AppColors.dark}
            />
         </div>
         {/* <BottomNavigation showLabels value={value} onChange={(e, newValue) => handleChange(e, newValue)}> */}
         {/* <BottomNavigationAction
            label={AppText.bottomNav.home}
            icon={<IconWrapper type="home" color={history.location.pathname === "/" ? AppColors.primary : AppColors.dark} />}
            />
            <BottomNavigationAction
            label={AppText.bottomNav.map}
            icon={
               <IconWrapper type="location" color={history.location.pathname === "/map" ? AppColors.primary : AppColors.dark} />
            }
            />
            <BottomNavigationAction
            label={AppText.bottomNav.chat}
            icon={<IconWrapper type="chat" color={history.location.pathname === "/chat" ? AppColors.primary : AppColors.dark} />}
            />
            <BottomNavigationAction
            label={AppText.bottomNav.challenge}
            icon={
               <IconWrapper
               type="challenge"
               color={history.location.pathname === "/challenge" ? AppColors.primary : AppColors.dark}
               />
            }
            />
            <BottomNavigationAction
            label={AppText.bottomNav.profile}
            icon={
               <Avatar
               src={userData.isLoggedIn ? userData.profileImage : ""}
               color={history.location.pathname === "/profile" ? AppColors.primary : AppColors.dark}
               style={{ height: 40, width: 40 }}
               />
            }
         /> */}
         {/* </BottomNavigation> */}
      </div>
   );
};

export default TestBottomNav;
