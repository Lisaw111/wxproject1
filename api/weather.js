var ajax = require('./Ajax.js').ajax;

function getWeatherInfo (data) {
  var weatherInfo = ajax('https://free-api.heweather.net/s6/weather?', data, 'GET');
  return weatherInfo;
}
module.exports = {
  getWeatherInfo: getWeatherInfo
};