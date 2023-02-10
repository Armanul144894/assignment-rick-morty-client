import React from "react";
import Banner from "../Banner/Banner";
import Cast from "../Cast/Cast";
import Episode from "../Episode/Episode";
import Location from "../Location/Location";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Cast></Cast>
      <div className="location-container">
        <Episode></Episode>
        <Location></Location>
      </div>
    </div>
  );
};

export default Home;
