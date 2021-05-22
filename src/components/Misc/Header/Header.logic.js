import { useContext, useState } from "react";
import { UserDataContext } from "../../../store/UserDataContextProvider";

const useHeader = () => {
   const { userData } = useContext(UserDataContext);
   const [isOpen, setIsOpen] = useState(false);

   const toggleDrawer = (event) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
         return;
      }
      setIsOpen(!isOpen);
   };

   return {
      userData,
      isOpen,
      toggleDrawer,
   };
};

export default useHeader;
