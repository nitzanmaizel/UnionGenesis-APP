import React from "react";
import Header from "../../Misc/Header/Header";

const HomePage = ({ userData }) => {
   return (
      <div>
         <Header userData={userData} />
      </div>
   );
};

export default HomePage;
