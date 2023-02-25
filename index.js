const {fetchMyIP, fetchCoordsByIP} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didnt work!', error);
    return;
  }
  console.log('It worked! Returned IP: ', ip);
});

fetchCoordsByIP((ip, error) => {
  if (error) {
    console.log(error)
  }
  
  console.log(ip)
})