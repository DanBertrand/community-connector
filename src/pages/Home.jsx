/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";

const Home = () => {
  const { REACT_APP_API_URL } = process.env;
  console.log("REACT_APP_API_URL ", REACT_APP_API_URL);

  const fetchData = async () => {
    const response = await fetch(REACT_APP_API_URL + `login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(await json);
  };

  return (
    <div className="Home">
      <h1>This is home</h1>
      <button type="button" onClick={fetchData}></button>
    </div>
  );
};

export default Home;
