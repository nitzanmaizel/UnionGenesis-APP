const MuiStyleFunction = (theme) => ({
   BottomNav_Container: {
      position: "absolute",
      bottom: 0,
      display: "flex",
      margin: "auto",
      zIndex: 1100,
      height: 80,
      backgroundColor: "#F8F8F8",
      boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
   },
   BottomNav_Wrapper: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-around",
   },
   BottomNav_Icon_Wrapper: {
      display: "flex",
      flexDirection: "column",
   },
   BottomNav_Icon_label: {
      textAlign: "center",
      fontSize: 16,
   },
});
export default MuiStyleFunction;
