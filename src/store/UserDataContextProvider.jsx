import React, { createContext, useState, useEffect, useRef } from "react";

export const UserDataContext = createContext({});
export const UserDataFunctionsContext = createContext({});

const currentUser = {
   id: 1,
   firstName: "Nitzan",
   lastName: "Maizel",
   email: "nitzanmaizel@gmail.com",
   profileImage: "https://lh3.googleusercontent.com/a-/AOh14GgfbUL5ekoBDLCzHV5TVVA8d2C0uQeZZvqD55Yu=s96-c",
};

export const UserDataContextProvider = ({ children }) => {
   const [userData, setUserData] = useState({ isLoggedIn: false });

   const isDesktop = window.innerWidth > 800;

   const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

   useEffect(() => {
      setUserData({ isLoggedIn: true, ...currentUser });
   }, []);

   const contextFunctions = useRef({ setUserData });
   const context = { userData, isDesktop, isPhone };

   return (
      <UserDataContext.Provider value={context}>
         <UserDataFunctionsContext.Provider value={contextFunctions.current}>{children}</UserDataFunctionsContext.Provider>
      </UserDataContext.Provider>
   );
};
