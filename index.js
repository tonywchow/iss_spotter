const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didnt work!', error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP('69.172.174.57',(error, coordinates) => {
//   if (error) {
//     console.log('It didnt work!', error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', coordinates);
// });
// let coordinates =  { latitude: 49.2827291, longitude: -123.1207375 };
// fetchISSFlyOverTimes(coordinates, (error, data) => {
//   if (error) {
//     console.log('It didnt work!', error);
//     return;
//   }
//   console.log('It worked! Fly over times: ', data);
// });
const printPassTimes = function(passTimes) {
  for(const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime)
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didnt work')
  }
  printPassTimes(passTimes)
});