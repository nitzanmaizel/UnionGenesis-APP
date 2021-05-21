import { Grid } from "@material-ui/core";

import React from "react";

import Header from "../../Misc/Header/Header";
import PostList from "../../Misc/PostList/PostList";

const HomePage = ({ userData }) => {
   return (
      <Grid container item xs={12} sm={12} md={12} lg={12}>
         <Header userData={userData} />
         <PostList />
      </Grid>
   );
};

export default HomePage;
