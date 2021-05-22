const MuiStyleFunction = (theme) => ({
   CategoryChoiceHeader: {
      overflow: "hidden",
      paddingLeft: 20,
      paddingRight: 20,
   },
   CategoryChoiceHeader_title: {
      fontSize: 20,
   },
   CategoryChoiceHeader_button_wrapper: {
      marginLeft: 10,
   },
   CategoryChoiceHeader_button_selected: {
      backgroundClip: "blue",
   },
   CategoryChoiceHeader_categoriesScrollWrapper: {
      overflowX: "scroll",
      overflowY: "hidden",

      "::-webkit-scrollbar": {
         display: "none",
      },
   },
   CategoryChoiceHeader_categories: {
      display: "flex",
      width: "max-content",
   },
});
export default MuiStyleFunction;
