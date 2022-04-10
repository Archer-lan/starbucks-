// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:[],
        bannermpData:[],
        bannerbottomData:[],
        bannertabs:[],
        memberlittle:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.getStorage({
            key: 'userInfo',
            success (res) {
              that.setData({
                userInfo:res.data
              })
            }
          })
        wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'banner-mp'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                  bannermpData:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'banner-bottom'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                    bannerbottomData:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'banner-tabs'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                    bannertabs:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'member-little'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                    memberlittle:res.data.data
                })
              }
            }
          })

    },
    ToOrder:function(){
      wx.navigateTo({
        url: '/pages/order/order',
      })
    },
    Tomycoupon:function(){
      wx.navigateTo({
        url: '/pages/mycoupon/mycoupon',
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