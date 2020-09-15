module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        utils: "@/utils"
      }
    }
  },
  // 使用代理
  // devServer: {
  //   //! 移动端测试用
  //   //家里本机ip
  //   // public: "172.20.10.4:8080",
  //   // 公司本机ip
  //   public: "10.10.2.125:8080",
  //   https:false,
  //   proxy:null,
  //   hot: true,
  //   disableHostCheck: true,
  //   proxy: {
  //     '/api': {
  //       // 发送请求的地址
  //       target: 'http://192.168.46.232:8686/',
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   }
  // },


  // devServer: {
  //   // 端口配置
  //   port: 1888,
  //   // 反向代理配置
  //   proxy: {
  //     '/api': {
  //       // 对接Atom Boot后台
  //       // target: 'http://localhost:8686/',
  //       target: 'http://192.168.46.232:8686',
  //       // 对接Atom Cloud后台
  //       //target: 'http://localhost/',
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   }
  // }
};
