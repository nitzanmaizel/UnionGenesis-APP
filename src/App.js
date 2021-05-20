import { Grid } from "@material-ui/core";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import MuiTheme from "./styles/MuiTheme";

const App = () => {
   return (
      <div>
         <div className="App" dir={MuiTheme.direction}>
            <Grid container item xs={12} sm={8} md={6} lg={6} style={{ margin: "auto" }}>
               <Switch>
                  <Route exact path="/" component={HomePage} />
               </Switch>
            </Grid>
         </div>
      </div>
   );
};

export default App;
