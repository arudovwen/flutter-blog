const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Flutter blog",
    themeColor: "#2c2c2c",
    msTileColor: "#2c2c2c",
    appleMobileWbeAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#2c2c2c",
    icons: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-icon-180x180.png",
      msTileImage: "img/icons/ms-icon-310x310.png",
    },
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: null,
      exclude: [/_redirect/, /\.map$/, /_headers/],
    },
    manifestOptions: {
      background_color: "#2c2c2c",
    },
  },
});
