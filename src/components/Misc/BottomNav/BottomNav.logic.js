import { useHistory } from "react-router-dom";

const useBottomNav = () => {
   let history = useHistory();

   let locationPath = history.location.pathname;

   const handleOnClick = (e) => {
      let targetURL = e.currentTarget.getAttribute("name");
      if (targetURL === "home") history.push("/");
      else history.push(`/${targetURL}`);
   };

   return {
      locationPath,
      handleOnClick,
   };
};

export default useBottomNav;
