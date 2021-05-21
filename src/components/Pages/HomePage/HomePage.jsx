import React, { useState } from "react";
import BottomNav from "../../Misc/BottomNav/BottomNav";
import Header from "../../Misc/Header/Header";

const HomePage = () => {
   const [userData, setUserDta] = useState({
      id: 1,
      firstName: "Nitzan",
      lastName: "Maizel",
      email: "nitzanmaizel@gmail.com",
      profileImage: "https://lh3.googleusercontent.com/a-/AOh14GgfbUL5ekoBDLCzHV5TVVA8d2C0uQeZZvqD55Yu=s96-c",
   });
   return (
      <div>
         <Header />
         <div style={{ height: "80vh" }}></div>
         <BottomNav userData={userData} />
      </div>
   );
};

export default HomePage;
