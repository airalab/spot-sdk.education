// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Spot Learning SDK',
  siteDescription: 'Become a certified Spot developer with educational program based on Boston Dynamics SDK.',
  siteUrl: 'https://spot-sdk.education/',
  plugins: [
    {
      use: "gridsome-plugin-google-sheets-post",
      options: {
        script: process.env.FORM_SCRIPT
      }
      
  }
  ]
}
