import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { UserDataContextProvider } from "./store/UserDataContextProvider";
import { FeedContextProvider } from "./store/FeedContextProvider";

import MuiTheme from "./styles/MuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const history = createBrowserHistory();
const theme = createMuiTheme(MuiTheme);

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
   <BrowserRouter forceRefresh={true}>
      <Router history={history}>
         <MuiThemeProvider theme={theme}>
            <CssBaseline>
               <FeedContextProvider>
                  <UserDataContextProvider>
                     <App />
                  </UserDataContextProvider>
               </FeedContextProvider>
            </CssBaseline>
         </MuiThemeProvider>
      </Router>
   </BrowserRouter>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
