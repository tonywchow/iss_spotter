/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    //error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    //if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);//Error() creates a new Error object that we can pass around. In this case we pass it back to the callback to indicate that something went wrong
      return;
    }
    const data = JSON.parse(body);//converts the string into an object
    callback(null, data['ip']);//returns the IP through callback, since there is no erro, we fill the parameter with a null
    return;
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      console.log(error)
      callback(error, null)
    }
    if (response.statusCode !== 200) {
      console.log(response.statusCode)
      callback(response.statusCode, null)
    }
    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null)
      return;
    }
    const latitude = parsedBody["latitude"]
    const longitude = parsedBody['longitude']
    result = { latitude, longitude }
  })
}

// console.log(fetchCoordsByIP('69.172.174.57', null))



module.exports = { fetchMyIP, fetchCoordsByIP };