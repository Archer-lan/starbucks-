// pages/login/login.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    formSubmit:function(e){
        console.log(e.detail.value)
        wx.login({
            success (res) {
              console.log(res.code)
              if (res.code) {
                //发起网络请求
                wx.request({
                    url: 'http://localhost:8080/user/userLogin', //仅为示例，并非真实的接口地址
                    data: {
                      code: res.code,
                      phone: e.detail.value.phone,
                      password: e.detail.value.password
                    },
                    method:"POST",
                    header: {
                      'Content-Type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    success (res) {
                      console.log("登录成功返回的token",res.data)
                      if(res.data.code == '0003'){
                        wx.switchTab({
                          url: '/pages/my/my'
                        })
                        wx.showToast({
                          title: res.data.msg,
                          icon: 'success',
                          duration: 2000
                        })
                        wx.setStorage({
                          key:"token",
                          data:res.data.data
                        })
                      }else{
                        wx.showToast({
                          title: res.data.msg,
                          icon: 'error',
                          duration: 2000
                        })
                      }
                    }
                  })
              } 
            }
          })
        wx.request({
            url: 'http://localhost:8080/user/userLogin', //仅为示例，并非真实的接口地址
            data: {
              code: e.detail.value.code,
              phone: e.detail.value.phone,
              password: e.detail.value.password
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
            }
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})