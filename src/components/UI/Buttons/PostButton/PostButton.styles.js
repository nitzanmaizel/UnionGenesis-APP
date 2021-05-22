export default (theme) => ({
   PostButton: {
      background: theme.palette.primary.pinkGradient,
      borderRadius: "50%",
      color: "white !important",
      overflow: "auto",
      width: 64,
      height: 64,
      boxShadow: theme.shadow.pinkButton,
   },
   PostButton_wrapper: (isDesktop) => ({
      position: "fixed",
      left: isDesktop ? "25%" : "16px",
      justifyContent: "flex-end",
      width: 64,
      height: 64,
      bottom: 96,
      zIndex: 1300,
   }),
   PostButton_direction: {
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
});
