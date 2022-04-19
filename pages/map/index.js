//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    dds: '婚礼已经开始啦',
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
  //事件处理函数
  markertap(e) {
    var lng = "117.82747219999315"
    var lat = "39.30546027391144"
    wx.openLocation({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      scale: 18,
      name: "芦台春生态园",
      address: "天津市宁河区芦台春生态园 "
    })
  },
  onLoad: function () {
    var that = this
    //地图信息
    var lng = "117.82747219999315"
    var lat = "39.30546027391144"

    // var lng = res.data.mainInfo.lng
    // var lat = res.data.mainInfo.lat
    that.setData({
      lng: lng, // 全局属性，用来取定位坐标
      lat: lat,
      markers: [{
        iconPath: "/images/map/location.png",
        id: 0,
        latitude: lat, // 页面初始化 options为页面跳转所带来的参数 
        longitude: lng,
        width: 22,
        height: 31
      }],
    });

   setInterval(() => {
    this.ddsf();
   }, 1000)
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  ddsf: function() {
      var nowtime = new Date(),  //获取当前时间
          endtime = new Date("2022/5/5");  //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
          leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
          lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
          leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
          lefts = Math.floor(lefttime/1000%60);  //计算秒数

          if (lefttime > 0) {
            this.setData({
              dds:leftd + "天" + lefth + "小时" + leftm + "分钟" + lefts + '秒'
            })
          } else {
            this.setData({
              dds: '婚礼已经开始啦'
            })
          }
          
  }
})
