//app.js
var api = require("./api/api.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    wx.showShareMenu();
    wx.getUserInfo({
      success: (res) => {
        wx.setStorageSync("userInfo", res.rawData);
      },
    });
   
  },
  globalData: {
    userInfo: null,
  },
});
