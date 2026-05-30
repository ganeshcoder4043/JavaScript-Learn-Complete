// const enterCityName = document.getElementById("enter-city");
// const searchButton = document.getElementById("search-buttom");
// const locationName = document.getElementById("locationName");
// const temperature = document.getElementById("temperature");

// async function getData(cityName) {
//   const resultData = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=960ec3d0950b4605b4761023263005&q=${cityName}&aqi=yes`,
//   );
//   return await resultData.json();
// }

// searchButton.addEventListener("click", async () => {
//   const value = enterCityName.value;

//   if (value === "") {
//     alert("Please enter a city name!");
//     return;
//   }

//   try {
//     const result = await getData(value);

//     locationName.innerText = `${result.location.name} | ${result.location.region} | ${result.location.country}`;
//     temperature.innerText = `${result.current.temp_c}°C`;
//   } catch (error) {
//     console.log("Error:", error);
//     locationName.innerText = "City not found! Please try again.";
//     temperature.innerText = "--";
//   }
// });

const enterCityName = document.getElementById("enter-city");
const searchButton = document.getElementById("search-buttom");
const locationName = document.getElementById("locationName");
const temperature = document.getElementById("temperature");

async function getData(cityName) {
  const resultData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=960ec3d0950b4605b4761023263005&q=${cityName}&aqi=yes`,
  );
  return await resultData.json();
}

searchButton.addEventListener("click", async () => {
  const value = enterCityName.value;
  if (value === "") {
    alert("Please enter a city name!");
    return;
  }
  try {
    const result = await getData(value);

    locationName.innerText = `name = ${result.location.name}, region name = ${result.location.region}, country name = ${result.location.country}`;

    temperature.innerText = `${result.current.temp_c}°C`;
  } catch (error) {
    locationName.innerText = "name = --, region name = --, country name = --";
    temperature.innerText = "--°C";
  }
});
