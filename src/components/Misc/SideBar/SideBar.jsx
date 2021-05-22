import React from "react";

import { List, Divider, ListItem, ListItemIcon, ListItemText, Avatar, makeStyles } from "@material-ui/core";
import MuiStyleFunction from "../SideBar/SideBar.styles";

import IconWrapper from "../../Icons/IconWrapper";
import AppText from "../../../styles/AppText";
import useSideBar from "./SideBar.logic";

const useStyles = makeStyles(MuiStyleFunction);

const SideBar = () => {
   const classes = useStyles();
   const { userData, handleProfileClick } = useSideBar();
   return (
      <div className={classes.root}>
         <List>
            <ListItem button className={classes.Header_ListItem} onClick={handleProfileClick}>
               <ListItemIcon>
                  <Avatar alt="" src={userData.isLoggedIn && userData.profileImage} />
               </ListItemIcon>
               <ListItemText
                  primary={userData && `${userData.firstName} ${userData.lastName}`}
                  classes={{ primary: classes.SideBar_ListItem_Text_profile }}
               />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper type="bell" />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.notification} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper isDark={true} type="bookmark" />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.likeAndSave} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper isDark={true} type="clipboard" />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.Terms} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper isDark={true} type="contact" />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.ContactUs} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper isDark={true} type="share" className={classes.SideBar__share_icon} />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.shareUs} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button className={classes.Header_ListItem}>
               <ListItemIcon>
                  <IconWrapper isDark={true} type="exit" />
               </ListItemIcon>
               <ListItemText primary={AppText.SideBar.logout} classes={{ primary: classes.SideBar_ListItem_Text }} />
            </ListItem>
         </List>
         <Divider />
      </div>
   );
};

export default SideBar;
