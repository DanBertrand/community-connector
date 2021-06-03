/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import HomePresentation from "./HomePresentation/HomePresentation";
import DisplayCommunities from "./DisplayCommunities/DisplayCommunities";
import StyledButton from "components/StyledButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>This is home</h1>
      <HomePresentation />
      <DisplayCommunities />
      <Link to="/new_communtity">Create you community</Link>
    </div>
  );
};

export default Home;
