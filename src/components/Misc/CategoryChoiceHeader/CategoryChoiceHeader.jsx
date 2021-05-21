import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FeedContext, FeedContextFunctions } from "../../../store/FeedContextProvider";
import { UserDataContext } from "../../../store/UserDataContextProvider.jsx";

const CategoryChoiceHeader = () => {
   const { userData } = useContext(UserDataContext);
   const { currentInterest, interests } = useContext(FeedContext);
   const { setCurrentInterest, setCurrentIndexOfPagination } = useContext(FeedContextFunctions);

   return <div></div>;
};

export default CategoryChoiceHeader;
