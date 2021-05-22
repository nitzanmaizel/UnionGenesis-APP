import React from "react";

const SearchIcon = ({ color = "#5DC4F9", size }) => {
   return (
      <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={size} height={size}>
         <path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M21 4A16 16 0 1 0 21 36A16 16 0 1 0 21 4Z"
         />
         <path fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="4" d="M32.229 32.229L45.5 45.5" />
      </svg>
   );
};

export default SearchIcon;
