import React from "react";

const LogoIcon = ({ size }) => {
   return (
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
         <path
            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            fill-rule="evenodd"
         />
      </svg>
   );
};

export default LogoIcon;