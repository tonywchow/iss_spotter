const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didnt work!', error);
    return;
  }
  console.log('It worked! Returned IP: ', ip);
});

fetchCoordsByIP('69.172.174.57',(error, coordinates) => {
  if (error) {
    console.log('It didnt work!', error);
    return;
  }
  console.log('It worked! Returned coordinates: ', coordinates);
});
let coordinates =  { latitude: 49.2827291, longitude: -123.1207375 };
fetchISSFlyOverTimes(coordinates, (error, data) => {
  if (error) {
    console.log('It didnt work!', error);
    return;
  }
  console.log('It worked! Fly over times: ', data);
});