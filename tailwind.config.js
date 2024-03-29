/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        72: "72px",
        800: "800px",
        412: "412px",
      },
      width: {
        subSection: "1120px",
        cardItem: "352px",
        productCard: "352px",
        productHotCard: "360px",
        cardImg: "352px",
        heart: "63px",
        categoryItem: "256px",
        mainItemRecentActivity: "540px",
        smMainItemRecentActivity: "300px",
        subItemImgRecentActivity: "256px",
        nearShopItem: "158px",
        cardItemInService: "300px",
        categoryIcon: "60px",
        salonSpaceImg: "121px",
        iconXL: "24px",
        iconL: "20px",
        iconM: "16px",
        iconS: "12px",
      },
      height: {
        cardItem: "518px",
        cardImg: "270px",
        productCard: "365px",
        productHotCard: "321px",
        heart: "41px",
        categoryItem: "212px",
        mainItemRecentActivity: "698px",
        nearShopItem: "136px",
        salonSpaceImg: "121px",
        nearShopListItem: "764px",
        iconXL: "24px",
        iconL: "20px",
        iconM: "16px",
        iconS: "12px",
      },
      maxWidth: {
        subItemImgRecentActivity: "256px",
        categoryItem: "256px",
        subSection: "1120px",
        banner: "1440px",
      },
      maxHeight: {
        nearShopItem: "176px",
        nearShopListItem: "764px",
        activityContainer: "855px",
        salonSpaceSection: "940px",
      },
      colors: {
        textFieldHoverShadow: "#FFF1F8",
        textFieldFocusShadow: "F3C2DA",
        primary: {
          main: "#fbb326",
          50: "#fff2db",
          100: "#fedea5",
          200: "#fdc969",
          300: "#fbb326",
          400: "#f9a300",
        },
        secondary: {
          main: "#056838",
          50: "#e7f7ed",
          100: "#c5ead3",
          200: "#9fddb8",
          300: "#76d19b",
          400: "#55c686",
        },
        borderNeutral: "#E6E8EC",
        borderSignInField: "#92929D",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};
