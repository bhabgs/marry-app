// pages/chat/index.js
var api = require('../../api/api.js')
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    openId:'',
    inputValue: '',
    name: '',
    tel: '',
    num:'',
    auth: false,
    msgSta: false,
    signSta: false,
    come:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    let userInfo = wx.getStorageSync('userInfo')
    let openId = wx.getStorageSync('openId')
    if (userInfo && openId) {
      this.setData({
        auth: true,
        userInfo: userInfo,
        openId:openId
      })
    }
 

  },
  leaveMsg: function() {
    this.setData({
      msgSta: true,
      signSta: false
    })
  },
  signIn: function() {
    this.setData({
      signSta: true,
      msgSta: false
    })
  },
  cancelMsg: function() {
    this.setData({
      signSta: false,
      msgSta: false,
      come:false
    })
  },
  comeWedding:function(){
    this.setData({
      come:true
    })
  },

  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })

  },
  numInput:function(e){
    this.setData({
      num: e.detail.value
    })
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  telInput: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  onPullDownRefresh: function () {
 
  },


  foo: function(e) {
    console.log(e);
  }
})