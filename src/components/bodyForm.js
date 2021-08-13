import React from "react";

export default function BodyForm({ fetchedData }) {
  return (
    <div className="bodyForm">
      <div className="spans">
        <span>{fetchedData.name} </span>
        <span>{fetchedData?.sys?.country}</span>
      </div>
      <div className="description">{fetchedData.weather[0].description}</div>
      <div className="description temp">
        {Math.round(fetchedData.main.temp - 273.15)} °C
      </div>
      <div className="description">
        Fells Like {Math.round(fetchedData.main.feels_like - 273.15)} °C
      </div>
    </div>
  );
}
