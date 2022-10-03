/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"'],
      },
      spacing: {
        72: "72px",
        800: "800px",
        412: "412px",
      },
      width: {
        subSection: "1120px",
        cardItem: "352px",
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
      },
      height: {
        cardItem: "518px",
        cardImg: "270px",
        heart: "41px",
        categoryItem: "212px",
        mainItemRecentActivity: "698px",
        nearShopItem: "136px",
        salonSpaceImg: "121px",
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
        primary: "#D63384",
        borderNeutral: "#E6E8EC",
        textTarget: "#3C652F",
        normalText: "#000000",
        'rgba': 'rgba(255, 247, 205, 0.54)',
      },
    },
  },
  plugins: [],
};
