import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import EditIcon from "../../Icons/EditIcon.jsx";
import MuiStyleFunction from "./PostButton.styles";
import { makeStyles } from "@material-ui/core";
import { UserDataContext } from "../../../store/UserDataContextProvider.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const PostButton = ({ onClick, href }) => {
   const { isDesktop } = useContext(UserDataContext);
   const classes = useStyles(isDesktop);
   return (
      <>
         <div className={classes.PostButton_wrapper}>
            <Button onClick={onClick} className={classes.PostButton}>
               <a className={classes.PostButton_direction} href={href}>
                  <EditIcon color="white" />
               </a>
            </Button>
         </div>
      </>
   );
};

export default PostButton;
