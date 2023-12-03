// 配置
window.Config = {

  // 站点名
  SiteName: 'Suancs 服务器状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm794816886-8aaa8c99b8f3599e75198d98',
    'm795376725-9957314661387b4c7dc761e2',
    'm795376511-45760970002471c5b9d0cf92',
    'm795376875-968a93a7adae82e143e09a8b',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 45,

  // 导航栏菜单
  Navi: [
    {
      text: '网盘',
      url: 'https://disk.suzn.top/'
    },
    {
      text: 'GitHub页',
      url: 'https://github.com/Suancs'
    },
    {
      text: '博客',
      url: 'https://blog.suzn.top/'
    },
  ],
};
