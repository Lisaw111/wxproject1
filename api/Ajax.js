function ajax(url='', data={}, method = "POST") {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: { 'Content-Type': 'application/json' },
      success: (res) => { resolve(res.data); },
      fail: (error) => { reject(error); },
      complete: (res) => { console.log(res); }
    })
  });
  return promise;
}
module.exports = {
  ajax: ajax
};