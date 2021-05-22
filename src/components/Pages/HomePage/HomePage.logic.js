import { useContext } from "react";
import { FeedContext } from "../../../store/FeedContextProvider";

const useHomePage = () => {
   const { currentInterest } = useContext(FeedContext);

   return {
      currentInterest,
   };
};

export default useHomePage;
