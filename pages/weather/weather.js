// weather.js
var app = getApp();  //获取当前小程序实例
var getWeatherInfo = require('../../api/weather.js').getWeatherInfo;

Page({
  data: {   //变量初始化
    cur_id: app.curid,
    basic: "",
    now: "",
    suggestion: "",
    update: ""
  },
  onShow: function () {  //从后台进入前台时显示
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    });
    getWeatherInfo({ location: app.curid, key: '88c509ef564946369e0909b7ad600002' }).then(res => {
      wx.hideToast();
      console.log(res);
      that.setData({
        basic: res.HeWeather6[0].basic, 
        update: res.HeWeather6[0].update,
        now: res.HeWeather6[0].now,
        suggestion: res.HeWeather6[0].lifestyle
      });//更新数据，视图将同步更新
    })
  }
})