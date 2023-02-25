const {fetchMyIP, fetchCoordsByIP} = require('./iss');

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