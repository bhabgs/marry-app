var api = require('../../api/api.js')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picList:[
      {
        url: "http://f.zxlmzs.com/img/20220415/d9d35cc86e1740209e6432e0d553df6e/1.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/64893f4a27f04c159883c60fca44d4f4/2.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/87a8c84027ad41b78ba725ea00bb6662/3.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/7147bef14b8e4be8abc338b5f0254d10/4.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/75ec34302cb942749b1b1292eaa940ec/6.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/8c6c581ce00f4708a46b5a7947a6b17b/7.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/bb7a69d86a5846579729a5788c517f32/8.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/a6a4ac6ad9ca4ab39ea26705c6117369/9.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/53e834d8914e49eda9c673ef70985989/10.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/4d1d898f15c640d785ac6f2e8570619e/11.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/0cbf2b5beb9845b6b2a021fc0c6d2fe8/12.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/63e879d6e0fe4c25bf48e6703cc06bf5/13.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/e4eaa15c415448c79baa287fd4d071cf/14.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/3e07746c8a3d4085b58d3acdf4dd1371/15.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/707d22cb0d334cd3be5ef4405b72b4d2/16.jpg",
      },
      {
        url: "http://f.zxlmzs.com/img/20220415/7e9b2b001683450d9dd5675fab982869/17.jpg",
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function() {
    
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
