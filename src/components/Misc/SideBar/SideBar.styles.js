import AppColors from "../../../styles/AppColors";

const MuiStyleFunction = (theme) => ({
   root: {
      width: 250,
      height: "100vh",
      direction: "rtl",
   },
   SideBar__share_icon: {
      transform: "rotate(-90deg)",
   },
   SideBar_ListItem: {
      textAlign: "right",
   },
   SideBar_ListItem_Text_profile: {
      display: "flex",
      color: AppColors.primary,
   },
   SideBar_ListItem_Text: {
      display: "flex",
      fontSize: 14,
      marginLeft: 10,
   },
});
export default MuiStyleFunction;
