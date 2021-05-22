import React from "react";

import { Grid } from "@material-ui/core";

import CategoryChoiceHeader from "../CategoryChoiceHeader/CategoryChoiceHeader";
const PostList = () => {
   return (
      <>
         <CategoryChoiceHeader />
         <Grid container item xs={12} sm={12} md={12} lg={12}></Grid>
      </>
   );
};

export default PostList;
