// pages/vip/vip.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        memberlevel:[],
        memberlittle:[],
        currentId:0,
        color:["black","white","white"],
        viplevel:["member-wel","member-green","member-gold"],
        vipfunc:[],
        memberrule:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'member-level'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              if (res.data.code == '0001') {
                that.setData({
                    memberlevel:res.data.data
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
              if (res.data.code == '0001') {
                that.setData({
                    memberlittle:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: that.data.viplevel[that.data.currentId]
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {

              if (res.data.code == '0001') {
                that.setData({
                    vipfunc:res.data.data
                })
              }
            }
          })
          wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: 'member-rule'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              if (res.data.code == '0001') {
                that.setData({
                  memberrule:res.data.data
                })
              }
            }
          })
    },
    swiperchange:function(e){
        var that=this
        that.data.currentId=e.detail.current
        wx.request({
            url: 'http://localhost:8080/image/queryImageByType', //仅为示例，并非真实的接口地址
            data: {
              imagetype: that.data.viplevel[that.data.currentId]
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              if (res.data.code == '0001') {
                that.setData({
                    vipfunc:res.data.data
                })
              }
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