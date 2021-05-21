import React from "react";

import { Grid } from "@material-ui/core";

import Header from "../../Misc/Header/Header";

const ChatPage = ({ userData }) => {
   return (
      <Grid container item xs={12} sm={12} md={12} lg={12}>
         <Header userData={userData} />
      </Grid>
   );
};

export default ChatPage;
