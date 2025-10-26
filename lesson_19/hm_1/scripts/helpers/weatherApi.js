const API_KEY = "5fc91a6e3d261541c89f5552a47bbca0";

const getWeatherData = async (lat, lon) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ua`;

  try {
    const res = await fetch(weatherUrl);

    if (!res.ok) {
      throw new Error(`Ошибка запроса, код ошибки ${res.status}`);
    }

    const weatherObj = await res.json();
    const iconUrl = `https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;

    weatherObj.img = iconUrl;

    return weatherObj;
  } catch (error) {
    console.log(error);
  }
};

export default getWeatherData;
