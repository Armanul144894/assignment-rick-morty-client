import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import "./Location.css";

const Location = () => {
  const [allLocation, setAllLocation] = useState([]);
  console.log(allLocation);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setAllLocation(data.results));
  }, []);
  return (
    <div className="container mx-auto px-10 pb-10">
      <h1 className="text-white mx-4 location-title">Location</h1>

      <Carousel
        cols={5}
        rows={1}
        gap={11}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 4,
          },
          {
            breakpoint: 990,
            cols: 3,
          },
          {
            breakpoint: 776,
            cols: 2,
          },
        ]}
        mobileBreakpoint={400}
      >
        {allLocation.map((location) => (
          <Carousel.Item key={location.id}>
            <div className="card card-compact my-4 location-card shadow-xl">
              <div className="card-body location-body">
                <p>#{location.id}</p>
                <span>{location.name}</span>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Location;
