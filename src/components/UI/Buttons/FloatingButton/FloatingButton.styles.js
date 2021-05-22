const MuiStyleFunction = (theme) => ({
   FloatingButton: {
      background: theme.palette.primary.mainGradient,
      borderRadius: "22px !important",
      color: "white !important",
      width: 130,
      height: 44,
      whiteSpace: "nowrap",
      boxShadow: theme.shadow.primaryButton,
   },
   FloatingButton_button_text: {
      paddingLeft: 10,
   },
   FloatingButton_wrapper: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      position: "fixed",
      bottom: 96,
      zIndex: 1300,
   },
   FloatingButton_direction: {
      textDecoration: "none",
      width: "100%",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
});

export default MuiStyleFunction;
