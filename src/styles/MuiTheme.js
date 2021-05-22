const font = "Varela Round, sans-serif";

let MuiTheme = {
   direction: "rtl",
   fontFamily: font,
   overrides: {
      MuiCssBaseline: {
         "@global": {
            html: {
               direction: "rtl",
            },
            body: {
               "& ::-webkit-scrollbar": {
                  width: 0,
                  background: "transparent",
                  display: "none",
               },
            },
         },
      },
   },

   palette: {
      primary: {
         main: "#5DC4F9",
         mainGradient: "#5DC4F9",
         primaryGradient: "linear-gradient(135deg, #00BFFF 0%,  #1E90FF 100%)",
         overlay: "linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%)",
         dark: "#1A1A1A",
         white: "#FFFFFF",
         background: "#F8F8F8",
         background2: "#FFFFFF",
         textWeaker: "#9E9E9E",
         someColor: "#f6f6fa",
         subText: "#716e6e",
         mainGradientColor1: "#FF91AD",
         mainGradientColor2: "#FF789B",
         disabled: "#A3A3A3",
      },
   },
   shadow: {
      card: "0px 4px 20px rgba(25, 25, 25, 0.1)",
      primaryButton: "0px 4px 10px #716e6e",
   },
   sizes: {
      header: 80,
      bottomNav: 90,
      card: {
         image: 150,
         video: 150,
      },
   },
   margin: {
      large: 20,
      medium: 15,
      main: 10,
      small: 5,
   },
   padding: {
      huge: 150,
      extraLarge: 40,
      large: 20,
      main: 10,
   },
   borderRadius: {
      small: 2,
      main: 5,
      large: 25,
   },
   border: {
      grayed: "1px solid #dadada",
   },
   fonts: {
      hugeTitle: 24,
      largeTitle: 20,
      title: 18,
      subTitle: 16,
      paragraph: 14,
      subText: 12,
   },
   typography: {
      fontFamily: '"Varela Round",Roboto,"Helvetica Neue",Arial,sans-serif',
   },
};

export default MuiTheme;
