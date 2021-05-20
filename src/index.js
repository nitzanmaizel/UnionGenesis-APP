import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import MuiTheme from "./styles/MuiTheme";
const theme = createMuiTheme(MuiTheme);

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
   <MuiThemeProvider theme={theme}>
      <CssBaseline>
         <App />
      </CssBaseline>
   </MuiThemeProvider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
