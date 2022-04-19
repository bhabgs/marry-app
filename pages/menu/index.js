var api = require('../../api/api.js')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},

  onShareAppMessage: function() {
    return {
      title: '张鑫&李昂 婚礼邀请函',
      path: 'pages/index/index',
      imageUrl: 'http://f.zxlmzs.com/img/20220418/02136f89232247b3bec63ee9e77afb66/shareImg.jpg'
    }
  },

  onLoad: function() {
   
  },
})
