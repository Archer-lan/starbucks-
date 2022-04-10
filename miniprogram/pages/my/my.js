// pages/my/my.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        minestarbuck:[],
        minefunction:[],
        minebackground:[],
        buttonvisibility:["visible","hidden"],
        visnum:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userInfo:app.globalData.userInfo
        })
        var that=this

        wx.getStorage({
          key: 'token',
          success :(res)=> {
            that.data.visnum=1
          }
        })

        wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'mine-starbuck'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                  minestarbuck:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'mine-function'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                  minefunction:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'mine-background'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                    minebackground:res.data.data
                })
              }
            }
          })
    },
    Tomycoupon:function(){
        wx.navigateTo({
          url: '/pages/mycoupon/mycoupon',
        })
      },
    ToRegister:function(){
      wx.navigateTo({
        url: '/pages/register/register',
      })
    },
    ToLogin:function(){
      wx.navigateTo({
        url: '/pages/login/login',
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