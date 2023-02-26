const { nextISSTimesForMyLocation } = require('./iss_promised');
// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))

const printPassTimes = function(passTimes) {
  for (const time of passTimes) {
    const datetime = new Date(0);//Date(0) is the format of the date
    datetime.setUTCSeconds(time.risetime);//converts the risetime seconds into readable time
    const duration = time.duration;//grabbing the object properties under duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It didnt work: ', error.message);
  });
