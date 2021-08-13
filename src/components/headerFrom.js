import React from "react";
import { useState } from "react";

export default function HeaderForm({ fullData }) {
  const [data, setData] = useState();
  //   const [info, setInfo] = useState();

  const dataSupport = (value, key) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className="headerForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fullData({ data });
        }}
      >
        <input
          type="text"
          placeholder="Enter City Name"
          className="inputs"
          onChange={(e) => {
            dataSupport(e.target.value, "city");
          }}
        />
        <input
          type="text"
          placeholder="Enter Country Name"
          className="inputs"
          onChange={(e) => {
            dataSupport(e.target.value, "country");
          }}
        />
        <button className="btn">Check</button>
      </form>
    </div>
  );
}
