import { useState } from "react";

const [wind_speed, setwind_speed] = useState("");
const [wind_degrees, setwind_degrees] = useState("");
const [temp, settemp] = useState("");
const [humidity, sethumidity] = useState("");
const [sunset, setsunset] = useState("");
const [min_temp, setmin_temp] = useState("");
const [cloud_pct, setcloud_pct] = useState("");
const [feels_like, setfeels_like] = useState("");
const [sunrise, setsunrise] = useState("");
const [max_temp, setmax_temp] = useState("");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cfa1b35f81msh318716049a636b8p19a700jsn41049c1ceff9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchData = React.useCallback((city_param) => {
  axios({
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    headers: {
      "X-RapidAPI-Key": "cfa1b35f81msh318716049a636b8p19a700jsn41049c1ceff9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
    params: { city: city_param },
  })
    .then(function (response) {
      console.log(response.data);
      //   setwind_speed(response.data.wind_speed)
    })
    .catch(function (error) {
      console.log(error);
    });
}, []);
React.useEffect(
  (city_param) => {
    fetchData(city_param);
  },
  [fetchData]
);

const Submit_city = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= + ${city_name}`,
      options
    );
    let resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.log(err);
  }
};
