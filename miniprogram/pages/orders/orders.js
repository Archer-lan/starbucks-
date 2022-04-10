// pages/orders/orders.js
Page({
    data: {
      /**
          * 页面配置
          */
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      orderData:[],
      orderstate:0,
    },
    onLoad: function() {
      var that = this;
      /**
       * 获取系统信息
       */
      wx.getSystemInfo( {
        
        success: function( res ) {
          that.setData( {
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
          });
        }
      });
      wx.getStorage({
        key: 'token',
        success (res) {
          //已登录，获取订单数据
          wx.request({
            url: 'http://localhost:8080/orders/getOrdersByState', //仅为示例，并非真实的接口地址
            data: {
              token: res.data,
              orderstate: that.data.orderstate
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log("指定订单",res.data.data)
              that.setData({
                orderData:res.data.data
              })
            }
          })
        },
        fail(res){
          wx.showToast({
            title: "请先登录",
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    /**
       * 滑动切换tab
       */
    bindChange: function( e ) {
   
      var that = this;
      that.setData(
        that.data.orderstate=e.detail.current
      );
    },
    /**
     * 点击tab切换
     */
    swichNav: function( e ) {
   
      var that = this;
   
      if( this.data.currentTab === e.target.dataset.current ) {
        return false;
      } else {
        that.setData( {
          currentTab: e.target.dataset.current
        })
      }
    },
    // onLoad: function (options) {
    //     wx.chooseAddress({
    //         success (res) {
    //           console.log(res.userName)
    //           console.log(res.postalCode)
    //           console.log(res.provinceName)
    //           console.log(res.cityName)
    //           console.log(res.countyName)
    //           console.log(res.detailInfo)
    //           console.log(res.nationalCode)
    //           console.log(res.telNumber)
    //         }
    //       })
    //       wx.login({
    //         success (res) {
    //           if (res.code) {
    //             //发起网络请求
    //             wx.request({
    //               url: 'https://example.com/onLogin',
    //               data: {
    //                 code: res.code
    //               }
    //             })
    //           } else {
    //             console.log('登录失败！' + res.errMsg)
    //           }
    //         }
    //       })
    
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