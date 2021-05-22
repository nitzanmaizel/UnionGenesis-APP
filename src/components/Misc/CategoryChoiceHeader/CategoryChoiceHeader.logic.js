import { useContext } from "react";
import { FeedContext, FeedContextFunctions } from "../../../store/FeedContextProvider";

const useCategoryChoiceHeader = () => {
   const { currentInterest, interests } = useContext(FeedContext);
   const { setCurrentInterest } = useContext(FeedContextFunctions);

   const handleInterestChange = (interest) => {
      setCurrentInterest(interest);
   };

   return {
      currentInterest,
      interests,
      handleInterestChange,
   };
};

export default useCategoryChoiceHeader;
