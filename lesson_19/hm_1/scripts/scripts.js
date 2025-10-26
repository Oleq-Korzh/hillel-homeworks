import getWeatherData from "./helpers/weatherApi.js";
import data from "./data.js";
import {
  createHtmlElement,
  getContentDate,
  getOnlyCurrentTime,
} from "./helpers/helpers.js";

const weather = async (selector, lat, lon) => {
  const req = await getWeatherData(lat, lon);
  const appRoot = document.querySelector(selector);

  if (!req || !appRoot) {
    return;
  }

  appRoot.innerHTML = "";
  const weatherEl = createHtmlElement("div", null, "weather");
  const weatherLeftColumnEl = createHtmlElement("div", null, "weather__left");
  const weatherCityEl = createHtmlElement("div", req?.name, "weather__city");
  const weatherDayEl = createHtmlElement(
    "div",
    getContentDate().formattedDate,
    "weather__day"
  );
  const weatherTimeEl = createHtmlElement(
    "div",
    getContentDate().time,
    "weather__time"
  );
  const weatherHumidityEl = createHtmlElement("div", null, "weather__humidity");
  const weatherPressureEl = createHtmlElement(
    "div",
    `Humidity: ${req?.main?.humidity}%`,
    "weather__pressure"
  );
  const weatherWindEl = createHtmlElement(
    "div",
    `Wind: ${req?.wind?.speed} km/h SSE`,
    "weather__wind"
  );

  [
    weatherCityEl,
    weatherDayEl,
    weatherTimeEl,
    weatherHumidityEl,
    weatherPressureEl,
    weatherWindEl,
  ].forEach((obj) => weatherLeftColumnEl.appendChild(obj));

  const weatherRightColumnEl = createHtmlElement("div", null, "weather__right");
  const weatherIconEl = createHtmlElement("img", req?.img, "weather__icon");
  const weatherDegreeEl = createHtmlElement(
    "div",
    `${Math.round(req?.main?.temp)}°C`,
    "weather__degree"
  );
  const weatherDegreeFeelEl = createHtmlElement(
    "div",
    `Feels like:${Math.round(req?.main?.feels_like)}°C`,
    "weather__degree-feel"
  );
  const weatherInfoEl = createHtmlElement(
    "div",
    `${req?.weather[0]?.main}`,
    "weather__info"
  );

  const weatherRefreshEl = createHtmlElement("div", `Refresh`, "weather__info");

  [
    weatherIconEl,
    weatherDegreeEl,
    weatherDegreeFeelEl,
    weatherInfoEl,
    weatherRefreshEl,
  ].forEach((obj) => weatherRightColumnEl.appendChild(obj));

  weatherEl.appendChild(weatherLeftColumnEl);
  weatherEl.appendChild(weatherRightColumnEl);

  appRoot.appendChild(weatherEl);

  weatherRefreshEl.addEventListener("click", () => {
    weather(selector, lat, lon);
  });

  getOnlyCurrentTime(weatherTimeEl);
};

weather("#weather-kharkiv", data?.kharkiv?.lat, data?.kharkiv?.lon);
weather("#weather-odesa", data?.odesa?.lat, data?.odesa?.lon);
