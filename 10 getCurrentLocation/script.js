const button = document.getElementById("button");

async function getData(latitude, longitude) {
  const resultData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=960ec3d0950b4605b4761023263005&q=${latitude},${longitude}&aqi=yes`,
  );
  return await resultData.json();
}

async function getLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude,
  );
  console.log(result);
}

function failedToGetLocation() {
  console.log("Something issue");
}

button.addEventListener("click", async () => {
  // const result = navigator.geolocation.getCurrentPosition(()=>{getLocation}, ()=>{failedToGetLocation})
  navigator.geolocation.getCurrentPosition(getLocation, failedToGetLocation);
});
