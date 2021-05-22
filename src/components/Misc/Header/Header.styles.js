const MuiStyleFunction = (theme) => ({
   Header: {
      display: "flex",
      minWidth: "100%",
      margin: "auto",
      zIndex: 1100,
      height: 80,
      backgroundColor: "#F8F8F8",
      boxShadow: "0px 4px 40px rgba(25, 25, 25, 0.1)",
   },
   Header_wrapper: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-between",
   },
   Header_icon: {
      padding: 15,
   },
});
export default MuiStyleFunction;
