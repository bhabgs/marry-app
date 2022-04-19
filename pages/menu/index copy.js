var api = require('../../api/api.js')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picList:[],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onShareAppMessage: function() {
    return {
      title: '张鑫&李昂 婚礼邀请函',
      path: 'pages/index/index',
      imageUrl: 'http://f.zxlmzs.com/img/20220418/02136f89232247b3bec63ee9e77afb66/shareImg.jpg'
    }
  },

  onLoad: function() {
    wx.request({
      url: api.photo,
      success: (res)=> {
        console.log(res)
        this.setData({
          picList: res.data
        })
      }
    })
  },

  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  previewImage: function(e) {
    var imgsurl = []
    var imgObj = this.data.picList
    for (var i = 0; i < imgObj.length; i++) {
      imgsurl[i] = imgObj[i]['url']
    }
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: imgsurl // 需要预览的图片http链接列表
    })
  },
})
