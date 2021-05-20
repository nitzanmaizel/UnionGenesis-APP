import React from "react";
import StyleComponent from "./components/Examples/StyleComponent";
import MuiTheme from "./styles/MuiTheme";

const App = () => {
   return (
      <div>
         <div className="App" dir={MuiTheme.direction}>
            App
         </div>
      </div>
   );
};

export default App;
