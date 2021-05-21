import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import AppColors from "../../../../styles/AppColors";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: AppColors.white,
      color: AppColors.primary,
      borderRadius: 25,
      border: `1px solid ${AppColors.primary}`,
      "&:hover": {
         backgroundColor: AppColors.primary,
         color: AppColors.white,
      },
   },
   root_selected: {
      borderRadius: 25,
      backgroundColor: AppColors.primary,
      color: AppColors.white,
      border: `1px solid ${AppColors.primary}`,
      "&:hover": {
         backgroundColor: AppColors.primary,
         color: AppColors.white,
      },
   },
}));

const AppButton = ({ children, selected, className, onClick = () => {} }) => {
   const classes = useStyles();

   return (
      <Button
         color="primary"
         className={selected ? `${classes.root_selected} ${className}` : `${classes.root} ${className}`}
         onClick={() => onClick()}
      >
         {children}
      </Button>
   );
};

export default AppButton;
