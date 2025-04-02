import { apiKey } from './key.js';
const apiKeys = apiKey();
async function IPG() {
  const ip = document.querySelector("input").value;//getting input from the DOM
   const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeys}&ip=${ip}`;
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
function updateUI(data){
    document.querySelector(".ip").innerHTML =data.ip
    document.querySelector(".location").innerHTML =data.city;
    document.querySelector(".Timezone").innerHTML = data.time_zone.current_time;
    document.querySelector(".ISP").innerHTML = data.isp;
}
IPG();
/* || callback  fuuction when the button is been click */
const button = document.querySelector("button");
button.addEventListener("click", function () {
  IPG();
});