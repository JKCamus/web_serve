module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        services: "@/services",
        views: "@/views",
        utils: "@/utils"
      }
    }
  },

};
