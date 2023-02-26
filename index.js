const {nextISSTimesForMyLocation} = require('./iss');
//function below will convert the pass over data retrieved by latitude and longitude.
const printPassTimes = function(passTimes) {
  for (const time of passTimes) {
    const datetime = new Date(0);//Date(0) is the format of the date
    datetime.setUTCSeconds(time.risetime);//converts the risetime seconds into readable time
    const duration = time.duration;//grabbing the object properties under duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didnt work');
  }
  printPassTimes(passTimes);
});

