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
      callback(Error(msg), null);//Error() creates a new Error objec that we can pass around. In this case we pass it back to the callback to indicate that something went wrong
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
      console.log(error, null)
    }
    const data = JSON.parse(body);
    const latitude = data["latitude"]
    const longitude = data['longitude']
    console.log(latitude)
    console.log(longitude)
    result = { latitude, longitude }
    console.log(result)
  })
}

// console.log(fetchCoordsByIP('69.172.174.57', null))
console.log(fetchCoordsByIP('42', null))


module.exports = { fetchMyIP, fetchCoordsByIP };