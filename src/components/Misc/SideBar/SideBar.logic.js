import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserDataContext } from "../../../store/UserDataContextProvider";

const useSideBar = () => {
   let history = useHistory();
   const { userData } = useContext(UserDataContext);

   const handleProfileClick = () => {
      history.push("/profile");
   };

   return { userData, handleProfileClick };
};

export default useSideBar;
