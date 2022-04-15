var api = require('../../api/api.js')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: "",
    music_url: '',
    isPlayingMusic: true,
    hetel:"15002292298",
    shetel:"18322122802"
  },
  onLoad: function () {
//创建动画
    var animation = wx.createAnimation({

      duration: 3600,
      timingFunction: "ease",
      delay: 600,
      transformOrigin: "50% 50%",

    })


    animation.scale(0.9).translate(10, 10).step(); //边旋转边放大


    //导出动画数据传递给组件的animation属性。
    this.setData({
      animationData: animation.export(),
    })

    var that = this
    // wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
    //   title: '加载中',
    //   icon: 'loading',
    // });

    this.setData({
      music_url: 'https://docs.bhabgs.com/marry3/images/bgMusic.mp3'
    })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  callhe: function(event) {
    wx.makePhoneCall({
      //TODO
      phoneNumber: this.data.hetel
    })
  },
  callshe: function(event) {
    wx.makePhoneCall({
      phoneNumber: this.data.shetel
    })
  },
  play: function (event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})
