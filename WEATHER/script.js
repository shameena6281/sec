// console.log("===HOUR 1:JSON BASICS");
// let student={
//     name:"asha",
//     age:21,
//     marks:[85,90,78]
// };
// let jsonString=JSON.stringify(student);
// console.log("JSON STRING:",jsonString);
// let parsedobj = JSON.parse(jsonString);
// console.log("parsed object:",parsedobj);
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "chennai": { lat: 13.08, lon: 80.27 },
  "kolkata": { lat: 22.57, lon: 88.36 }
};

$(document).ready(function() {
  $("#fetchWeatherBtn").click(function() {
    let city = $("#cityInput").val().toLowerCase().trim();

    if (!cityCoords[city]) {
      $("#weather").html("⚠️ City not in list");
      return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    $.getJSON(url)
      .done(function(data) {
        if (data.current_weather) {
          const { temperature, windspeed, time } = data.current_weather;
          $("#weather").html(`
            <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
            <p>🌡️ Temperature: ${temperature}°C</p>
            <p>🌬️ Wind Speed: ${windspeed} km/h</p>
            <p>🕒 Time: ${new Date(time).toLocaleString()}</p>
          `);
         } 
        else {
          $("#weather").html("⚠️ Weather data not available");
        }
      })
      .fail(function(err) {
        $("#weather").html("⚠️ Error fetching weather data");
        console.error("Weather API Error:", err);
      });
  });
});

   
