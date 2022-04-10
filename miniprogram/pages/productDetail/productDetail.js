// pages/proDetail/proDetail.js
const util=require("../../utils/util")
Page({
    /**
     * 页面的初始数据
     */
    data: {
      proInfo:[],
      ordersdata:[],
      date:[],
      userInfo:[],
      titl:[],
      username:[],
      usertell:[],
      numb:[],
      protype:[],
      size:[]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that=this
    wx.request({
      url: 'http://localhost:8080/products/getProById', //仅为示例，并非真实的接口地址
      data:{
        id:options.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if (res.data.code == '0001') {
          that.setData({
            proInfo:res.data.data
          })
        }
      }
    })
      
      //分析根据id获取该页面的哪些数据：imageurl、项目名称、项目价格、项目描述、项目步骤
     
        
    },
    formSubmit:function (e) {
      let that = this
      var date=util.formatTime(new Date())
      that.setData(
        that.data.ordersdata=e.detail.value,
        that.data.date=date,
        that.data.titl=that.data.proInfo[0].title,
        that.data.size=e.detail.value.cuptype,
        that.data.protype=e.detail.value.protemp,
        that.data.numb=e.detail.value.numb
      )
      wx.getStorage({
        key: 'token',
        success (res) {
          console.log(e.detail.value)
          wx.request({
            url: 'http://localhost:8080/user/getUserNameAndPhone',
            data:{
              token:res.data
            },
            header: {
              'Content-Type': 'application/x-www-form-urlencoded' // 默认值
            },
            success(res){
              that.setData(
                that.data.userInfo=res.data.data,
                that.data.username=that.data.userInfo[0].username,
                that.data.usertell=that.data.userInfo[0].usertell
              )
              console.log(that.data.username,52)
            }
          })

          wx.request({
            url: 'http://localhost:8080/orders/createOrders', //仅为示例，并非真实的接口地址
            data: {
              token: res.data,
              title: that.data.titl,
              makedate:that.data.date,
              username: that.data.username,
              usertell: 15520592280,
              num:that.data.numb,
              // temperature:that.data.protype,
              // size:that.data.size
              temperature:"cold",
              size:"中杯"
            },
            method:"POST",
            header: {
              'Content-Type': 'application/x-www-form-urlencoded' // 默认值
            },
            success (res) {
              if(res.data.code == '0001'){
                wx.switchTab({
                  url: '/pages/orders/orders'
                })
                wx.showToast({
                  title: "下单成功",
                  icon: 'success',
                  duration: 2000
                })
              }else{
                
              }
              
            }
          })  
        },
        fail (res){
          wx.navigateTo({
            url: '/pages/login/login'
          })
          wx.showToast({
            title: "请先登录",
            icon: 'success',
            duration: 2000
          })
        }    
      })
      // console.log(that.data.proInfo[0].title)
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