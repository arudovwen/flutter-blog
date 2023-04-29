const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "flutter-blog",
    themeColor: "#fff",
    msTileColor: "#fff",
    appleMobileWbeAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#fff",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // swSrc: "./service-worker.js",
      exclude: [/_redirect/, /\.map$/, /_headers/],
    },
    manifestOptions: {
      background_color: "#fff",
    },
  },
});
