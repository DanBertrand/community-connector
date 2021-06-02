/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import HomePresentation from "./HomePresentation/HomePresentation";
import DisplayCommunities from "./DisplayCommunities/DisplayCommunities";

const Home = () => {
  return (
    <div className="Home">
      <h1>This is home</h1>
      <HomePresentation />
      <DisplayCommunities />
    </div>
  );
};

export default Home;
