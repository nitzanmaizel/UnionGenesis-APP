import React from "react";

import CategoryButton from "../../UI/Buttons/CategoryButton/CategoryButton";

import { makeStyles } from "@material-ui/core";
import MuiStyleFunction from "./CategoryChoiceHeader.styles";
import AppText from "../../../styles/AppText";
import useCategoryChoiceHeader from "./CategoryChoiceHeader.logic";

const useStyles = makeStyles(MuiStyleFunction);

const CategoryChoiceHeader = () => {
   const classes = useStyles();

   const { currentInterest, interests, handleInterestChange } = useCategoryChoiceHeader();

   return (
      <div className={classes.CategoryChoiceHeader}>
         <h1 className={classes.CategoryChoiceHeader_title}>
            {currentInterest.shortName !== AppText.AppInterests.feed ? currentInterest.shortName : AppText.AppInterests.title}
         </h1>
         <div className={classes.CategoryChoiceHeader_categoriesScrollWrapper}>
            <div className={classes.CategoryChoiceHeader_categories}>
               {interests.map((interest) => (
                  <span
                     onClick={() => handleInterestChange(interest)}
                     key={interest.id}
                     className={classes.CategoryChoiceHeader_button_wrapper}
                  >
                     <CategoryButton selected={interest.id === currentInterest.id ? true : false}>
                        {interest.shortName}
                     </CategoryButton>
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CategoryChoiceHeader;
