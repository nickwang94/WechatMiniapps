// pages/index/index.wxml.js
// https://devapi.qweather.com/v7/weather/now?location=ID&key=XXX
// key=b1595249f1454d4ba1607a50d543a155

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['上海市', '上海市', '闵行区 '],
    locationid: '101010100',
    now: {}
  },
  changeRegion (e) {
    this.setData({
      region: e.detail.value
    })
    this.getLocation(); // 获取定位位置的id
    this.getWeather();  // 更新天气
  },
  getLocation: function() {
    var that = this;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data: {
        location: that.data.region[1],
        key: 'b1595249f1454d4ba1607a50d543a155'
      },
      success: (res) => {
        that.setData({
          locationid: res.data.location[0].id
        })
      }
    })
  },
  getWeather: function() {
    var that = this; // this不可以直接在wxApi函数内部使用
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data: {
        location: that.data.locationid,
        key: 'b1595249f1454d4ba1607a50d543a155'
      },
      success : (res) => {
        that.setData({
          now: res.data.now
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
    this.getWeather(); 
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