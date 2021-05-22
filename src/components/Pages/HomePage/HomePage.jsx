import React from "react";

import { Grid } from "@material-ui/core";

import Header from "../../Misc/Header/Header";
import PostList from "../../Misc/PostList/PostList";
import FloatingButton from "../../UI/Buttons/FloatingButton/FloatingButton";
import useHomePage from "./HomePage.logic";

const HomePage = ({ userData }) => {
   const { currentInterest } = useHomePage();
   return (
      <Grid container item xs={12} sm={12} md={12} lg={12}>
         <Header userData={userData} />
         <PostList />
         <FloatingButton floatingButtonText={currentInterest.buttonText} />
      </Grid>
   );
};

export default HomePage;
