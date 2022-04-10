// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    formSubmit: function(e){
      console.log(e.detail.value)
      wx.getStorage({
        key: 'userInfo',
        success (res) {
          console.log(res.data)
          wx.request({
            url: 'http://localhost:8080/user/userRegister', //仅为示例，并非真实的接口地址
            data: {
              username: e.detail.value.username,
              phone: e.detail.value.phone,
              password: e.detail.value.password,
              nickname: res.data.nickName,
              imageurl: res.data.avatarUrl
            },
            method:"POST",
            header: {
              'Content-Type': 'application/x-www-form-urlencoded' // 默认值
            },
            success (res) {
              console.log(res.data)
              if(res.data.code == '0002'){
                wx.switchTab({
                  url: '/pages/my/my'
                })
                wx.showToast({
                  title: res.data.msg,
                  icon: 'success',
                  duration: 2000
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
      })
      
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