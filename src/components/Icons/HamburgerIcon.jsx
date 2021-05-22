import React from "react";

const HamburgerIcon = ({ color = "#5DC4F9", size }) => {
   return (
      <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
         <path d="M0 11H24V13H0zM0 2H24V4H0zM0 20H24V22H0z" />
      </svg>
   );
};

export default HamburgerIcon;
