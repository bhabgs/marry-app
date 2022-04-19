var api = require('../../api/api.js')
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    animationData: "",
    music_url: '',
    isPlayingMusic: false,
    hetel:"15002292298",
    shetel:"18322122802",
    loginState: true,
    openId: ''
  },
  onShareAppMessage: function() {
    return {
      title: '张鑫&李昂 婚礼邀请函',
      path: 'pages/index/index',
      imageUrl: 'http://f.zxlmzs.com/img/20220418/02136f89232247b3bec63ee9e77afb66/shareImg.jpg'
    }
  },
  login: function() {
    wx.login({
      timeout: 1000,
      success: (res) => {
        wx.request({
          url: api.login,
          data: {code: res.code},
          success: (res) => {
            if (res.data.msg === '暂未注册') {
              this.setData({
                loginState: false,
                openId: res.data.data.openid
              })
            } else {
              this.setData({
                loginState: true,
                openId: res.data.openid
              });
              wx.setStorageSync("userInfo", res.data);
            }
          }
        })
      },
    });
  },

  goTo: function() {
    wx.navigateTo({
      url: '/pages/map/index',
    })
  },
  goTo1: function() {
    wx.navigateTo({
      url: '/pages/photos/index',
    })
  },
  goTo2: function() {
    wx.navigateTo({
      url: '/pages/bless/index',
    })
  },
  onLoad: function () {
//创建动画
  this.login();

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

    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
      title: '加载中',
      icon: 'loading',
    });

    wx.request({
      url: api.music,
      success: (res) => {
        wx.hideLoading();
        this.setData({
          music_url: res.data
        });
        this.play();
      }
    })


  },
  getUserInfo: function(e) {
    if (!e.detail.userInfo) return false;
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      loginState: true
    });
    const {nickName, gender, avatarUrl} = e.detail.userInfo;
    wx.request({
      url: api.createUser,
      method: 'POST',
      data: {
       nickName, gender, avatarUrl,
       openId: this.data.openId,
       name: '',
       num: '',
       number: 0,
       say: ''
      },
      success: () => {
        this.login();
      }
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
