// 应用全局配置
module.exports = {
  // baseUrl: 'https://vue.ruoyi.vip/prod-api',
  baseUrl: 'http://localhost:8080',
  //客户端id
  clientId:'428a8310cd442757ae699df5d894f051',
    //授权模式
  grantType:'password',
    //租户id
  tenantId: '000000',
    //记住我模式
  rememberMe: false,
  // 应用信息
  appInfo: {
    // 应用名称
    name: "ruoyi-app-plus",
    // 应用版本
    version: "1.1.0",
    // 应用logo
    logo: "/static/logo.png",
    // 官方网站
    site_url: "http://ruoyi.vip",
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "https://ruoyi.vip/protocol.html"
      },
      {
        title: "用户服务协议",
        url: "https://ruoyi.vip/protocol.html"
      }
    ]
  }
}
