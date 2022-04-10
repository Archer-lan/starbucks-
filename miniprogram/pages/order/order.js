const app = getApp()
Page({
  data:{
    locationData:[],
    num:0,
    classifications:[],
    productsInfos:[]
  },
  tomap () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  onShareAppMessage () {
    return {
      title: '快来使用LBS定位小工具',
      imageUrl: '../../asset/logo.png'
    }
  },
  onLoad(){
    let that = this;
    let location = "undefined";
    location = wx.getStorageSync('location');
    console.log("location:",location)
    if(location===""){
      that.setData({
        locationData:"获取定位"
      })
    }else{
      that.setData({
        locationData:location
      })
    }
    wx.request({
      url: 'http://localhost:8080/classification/getClassifications', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if (res.data.code == '0001') {
          that.setData({
            classifications:res.data.data
          })
        }
      }
    })
    wx.request({
      url: 'http://localhost:8080/products/getProByType', //仅为示例，并非真实的接口地址
      data:{
        protype:"coffee"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if (res.data.code == '0001') {
          that.setData({
            productsInfos:res.data.data
          })
        }
      }
    })
    // wx.clearStorageSync()
    // wx.getStorage({
    //   key:"location",
    //   success:function(res){
    //     console.log(res.data)
    //     that.data = res;
    //     // console.log(that.data);
    //   },
    //   fail:function () {
    //     console.log("failed");
    //   }
    // })
  },
  list_item_detail:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/productDetail/productDetail?id='+e.currentTarget.dataset.id,
    })
  },
  user_order(){
    wx.navigateTo({
      url: '/pages/userorder/userorder',
    })
  },
  switch_tap:function (e) {
    // console.log(e)
    console.log(e);

    this.setData({
      
      num:e.currentTarget.dataset.id-1
    })
    var that=this
    wx.request({
      url: 'http://localhost:8080/products/getProByType', //仅为示例，并非真实的接口地址
      data:{
        protype:that.data.classifications[that.data.num].type
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        
        if (res.data.code == '0001') {
          that.setData({
            productsInfos:res.data.data
          })
        }
      }
    })
  }
})
