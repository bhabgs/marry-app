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
    come:false,
    chatNum: 50,
    chatList: [
      {}
    ],
    state: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      const userInfo = wx.getStorageSync('userInfo');
      this.setData({
        userInfo: userInfo
      });
      wx.request({
        url: api.host + '/state/',
        success: (res) => {
          this.setData({
            state: res.data
          })
          if (res.data) {
              this.getBless();
          }
        }
      });
  },

  onShareAppMessage: function() {
    return {
      title: '张鑫&李昂 婚礼邀请函',
      path: 'pages/index/index',
      imageUrl: 'http://f.zxlmzs.com/img/20220418/02136f89232247b3bec63ee9e77afb66/shareImg.jpg'
    }
  },

  getBless: function() {
    const that = this;
    wx.request({
      url: api.getbless,
      success(res) {
        that.setData({
          chatList: res.data.users.filter((item) => item.say != '')
        })
      }
    })
  },
  cumpuntedChat: function() {

  },
  bindgetuserinfo: function(e) {
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

 setbless: function() {
  const {nickName, gender, avatarUrl, openId} = this.data.userInfo;
  wx.request({
    url:  api.sendbless,
    method: 'POST',
     data: {
      openId,
       nickName, gender, avatarUrl,
       name: this.data.name,
       num: this.data.num,
       number: this.data.tel,
       say: this.data.inputValue
     },
     success:(res) =>{
       this.getBless();
       this.setData({
         name: '',
         num: '',
         tel: '',
         inputValue: '',
         msgSta: false
       });
       wx.showToast({
         title: '上传成功',
         icon: 'none'
       })
     }
  })
 },
  foo: function(e) {
   
    // console.log(this.data.inputValue, this.data.name,this.data.tel,this.data.num);

    if (!this.data.name || !this.data.tel || !this.data.num) {
      wx.showModal({
        title: '表单填写成功',
        success: (res) => {
          if (res.confirm) {
            // 确认
            this.setbless();
          } else if (res.cancel) {
            // 取消
            wx.showToast({
              title: '取消提交操作',
              icon: 'none'
            })
          }
        }
      })
    } else {
      this.setbless();
    }

   
  }
})