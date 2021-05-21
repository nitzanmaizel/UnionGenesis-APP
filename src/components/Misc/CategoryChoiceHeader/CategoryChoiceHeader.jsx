import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { FeedContext, FeedContextFunctions } from "../../../store/FeedContextProvider";
import { UserDataContext } from "../../../store/UserDataContextProvider.jsx";

import AppText from "../../../styles/AppText";
import AppButton from "../../UI/Buttons/AppButton/AppButton";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: "red",
      color: theme.palette.primary.white,
   },
   CategoryChoiceHeader: {
      overflow: "hidden",
      paddingLeft: 20,
      paddingRight: 20,
   },
   CategoryChoiceHeader_title: {
      fontSize: 20,
   },
   CategoryChoiceHeader_button_wrapper: {
      marginLeft: 10,
   },
   CategoryChoiceHeader_button_selected: {
      backgroundClip: "blue",
   },
   CategoryChoiceHeader_categories: {
      display: "flex",
      width: "max-content",
   },
}));

const CategoryChoiceHeader = () => {
   const classes = useStyles();

   const { currentInterest, interests } = useContext(FeedContext);
   const { setCurrentInterest } = useContext(FeedContextFunctions);

   const handleInterestChange = (interest) => {
      console.log(interest, "interest");
      setCurrentInterest(interest);
   };

   return (
      <div className={classes.CategoryChoiceHeader}>
         <h1 className={classes.CategoryChoiceHeader_title}>
            {currentInterest.shortName !== AppText.AppInterests.feed ? currentInterest.shortName : AppText.AppInterests.title}
         </h1>
         <div className={classes.CategoryChoiceHeader_categories}>
            {interests.map((interest) => (
               <span
                  onClick={() => handleInterestChange(interest)}
                  key={interest.id}
                  className={classes.CategoryChoiceHeader_button_wrapper}
               >
                  <AppButton selected={interest.id === currentInterest.id ? true : false}>{interest.shortName}</AppButton>
               </span>
            ))}
         </div>
      </div>
   );
};

export default CategoryChoiceHeader;
