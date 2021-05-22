import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import MuiStyleFunction from "./FloatingButton.styles";
import IconWrapper from "../../../Icons/IconWrapper";
import AppColors from "../../../../styles/AppColors";

const useStyles = makeStyles(MuiStyleFunction);

const FloatingButton = ({ floatingButtonText, onClick, href }) => {
   const classes = useStyles();

   return (
      <Grid container item xs={12} sm={8} md={6} lg={6} className={classes.FloatingButton_wrapper}>
         <Button onClick={onClick} className={classes.FloatingButton}>
            <a className={classes.FloatingButton_direction} href={href}>
               <span className={classes.FloatingButton_button_text}>{floatingButtonText}</span>
               <IconWrapper type="edit" color={AppColors.white} />
            </a>
         </Button>
      </Grid>
   );
};

export default FloatingButton;
