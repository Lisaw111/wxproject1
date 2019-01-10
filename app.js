//app.js
App({
  onLaunch: function () {
    this.curid = wx.getStorageSync('curid') || this.curid;
    this.setlocal('curid', this.curid);
  },
  setlocal: function(id, val) {
    wx.setStorageSync(id, val);
  },
  curid: "CN101010100",
  version: "1.0"
})
