import React, { useState, useEffect } from "react";

export default function Weather() {
  const [city_name, setCity] = useState("");
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

  const Submit_city = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ${city_name}`,
        options
      );
      let response = await res.json();
      console.log(response);

      setwind_speed(response.wind_speed);
      setwind_degrees(response.wind_degrees);
      settemp(response.temp);
      sethumidity(response.humidity);
      setsunset(response.sunset);
      setmin_temp(response.min_temp);
      setcloud_pct(response.cloud_pct);
      setfeels_like(response.feels_like);
      setsunrise(response.sunrise);
      setmax_temp(response.max_temp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="search-box text-center">
        <h1>Enter the city.</h1>

        <form className="form-inline form-class" onSubmit={Submit_city}>
          <input
            class="form-control input-class"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="city_name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button class="btn btn-outline-success" type="submit" id="submit">
            Search
          </button>
        </form>
      </div>

      <div className="container">
        <h3 className="text-center">WEATHER REPORT FOR {city_name}</h3>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Temperature details</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    temp is {temp} <span id="temp"></span>
                  </li>
                  <li>
                    min_temp is {min_temp} <span id="min_temp"></span>
                  </li>
                  <li>
                    max_temp is {max_temp} <span id="max_temp"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Wind-details</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    wind_speed is {wind_speed} <span id="wind_speed"></span>
                  </li>
                  <li>
                    wind_degrees is {wind_degrees}{" "}
                    <span id="wind_degrees"></span>
                  </li>
                  <li>
                    humidity is {humidity} <span id="humidity"></span>
                  </li>
                  <li>
                    cloud_pct is {cloud_pct} <span id="cloud_pct"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-primary ">
                <h4 className="my-0 fw-normal">Other Details</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    sunrise at {sunrise} <span id="sunrise"></span>
                  </li>
                  <li>
                    sunset at {sunset} <span id="sunset"></span>
                  </li>
                  <li>
                    feels_like {feels_like} <span id="feels_like"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare cities</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "20%" }}></th>
                <th style={{ width: "10%" }}>Wind_Speed</th>
                <th style={{ width: "10%" }}>Temp</th>
                <th style={{ width: "10%" }}>Humidity</th>
                <th style={{ width: "10%" }}>Sunset</th>
                <th style={{ width: "10%" }}>Cloud_pct</th>
                <th style={{ width: "10%" }}>Feels_like</th>
                <th style={{ width: "10%" }}>Sunrise</th>
                <th style={{ width: "10%" }}>Max_temp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  DELHI
                </th>
                <td>1{wind_speed}</td>
                <td>1{temp}</td>
                <td>1{humidity}</td>
                <td>1{sunset}</td>
                <td>1{cloud_pct}</td>
                <td>1{feels_like}</td>
                <td>1{sunrise}</td>
                <td>1{max_temp}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  DELHI
                </th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
