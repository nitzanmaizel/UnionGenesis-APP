import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import BottomNav from "./components/Misc/BottomNav/BottomNav";
import HomePage from "./components/Pages/HomePage/HomePage";
import ChallengePage from "./components/Pages/ChallengePage/ChallengePage";
import MapPage from "./components/Pages/MapPage/MapPage";
import ProfilePage from "./components/Pages/ProfilePage/ProfilePage";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import MuiTheme from "./styles/MuiTheme";
import { UserDataContext } from "./store/UserDataContextProvider";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      // maxWidth: "100vh",
      // minHeight: "100vh",
   },
}));

const App = () => {
   const classes = useStyles();

   const { userData } = useContext(UserDataContext);

   return (
      <Grid container dir={MuiTheme.direction}>
         <Grid container item xs={12} sm={8} md={6} lg={6} style={{ margin: "auto" }} className={classes.root}>
            <Switch>
               <Route exact path="/">
                  <HomePage userData={userData} />
                  <BottomNav userData={userData} />
               </Route>
               <Route exact path="/map">
                  <MapPage userData={userData} />
                  <BottomNav userData={userData} />
               </Route>
               <Route exact path="/chat">
                  <ChatPage userData={userData} />
                  <BottomNav userData={userData} />
               </Route>
               <Route exact path="/challenge">
                  <ChallengePage userData={userData} />
                  <BottomNav userData={userData} />
               </Route>
               <Route exact path="/profile">
                  <ProfilePage userData={userData} />
                  <BottomNav userData={userData} />
               </Route>
            </Switch>
         </Grid>
      </Grid>
   );
};

export default App;
