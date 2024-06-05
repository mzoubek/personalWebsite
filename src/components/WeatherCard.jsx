import React, { useState, useEffect } from "react";

const WeatherCard = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const forecastWeather = async () => {
      const reponse = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=a2b4cb8cdc8547948ab160454240206&q=Ostrava&days=3&aqi=no&alerts=no"
      );
      return reponse.json();
    };

    forecastWeather().then((data) => {
      setForecast(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading weather: {error.message}</div>;
  }
  if (!forecast) {
    return <div>No weather data available.</div>;
  }

  const dates = forecast.forecast.forecastday.map((day) => {
    const date = new Date(day.date);
    const monthShortName = date.toLocaleString("default", { month: "short" });
    return [monthShortName, date.getDate()];
  });

  console.log(forecast);

  return (
    <div className='h-30 flex gap-4 items-center justify-center md:justify-around bg-gradient-to-tr from-white/40 to-white/10 rounded-[20px] md:col-span-2 lg:col-span-1 row-span-3 border-white/10 border-2 shadow-lg'>
      {forecast.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className='flex flex-col items-center py-3 px-2'
        >
          <div className='font-poppins text-betrBlack font-light text-sm'>
            {dates[index].join(", ")}
          </div>
          <div className='font-poppins font-semibold'>
            {forecast.location.name}
          </div>
          <div className='text-[12px] font-poppins font-light text-center'>
            {forecast.location.country}
          </div>
          <div className='font-poppins text-betrWhite text-sm font-bold text-center'>
            {day.day.condition.text}
          </div>
          <div className='font-poppins font-bold text-betrBlack text-xl'>
            {day.day.avgtemp_c}°C
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
