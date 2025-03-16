import { apiKey } from './key.js';
const apiKeys = apiKey();
console.log(apiKey);
async function IPG() {
  const apiKey = "57825d6b88524a2c972b69eacb02d4c0"; // Replace with your ipgeolocation API key
  const ip = "192.212.174.101"; // Example IP address
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
  try {
      const response = await fetch(url);
      if (!response) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      updateUI(data);
  } catch (error) {
     
  }
}
IPG();