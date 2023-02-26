const request = require('request-promise-native');
const { nextISSTimesForMyLocation } = require('./iss');
/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
}
/*
 * Requests data from https://iss-flyover.herokuapp.com using provided lat/long data
 * Input: JSON body containing geo data response from ipwho.is
 * Returns: Promise of request for fly over data, returned as JSON string
 */
const fetchISSFlyOverTimes = function(body) {
  const locationInfo = JSON.parse(body)
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${locationInfo.latitude}&lon=${locationInfo.longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const data = JSON.parse(body);
      return data;
    })

}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };