import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import "./Cast.css";

const Cast = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  console.log(allCharacters);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setAllCharacters(data.results));
  }, []);

  return (
    <div className="container mt-5 px-10">
      <div className="flex justify-between mx-4 mb-3 items-center cast-title">
        <p>Meet The Cast</p>
        <Link to="/allCast">
          <span className="view-btn">View All</span>
        </Link>
      </div>

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
        {allCharacters.map((characters) => (
          <Carousel.Item key={characters.id}>
            <div className="cast-card p-3">
              <img
                className="character-img w-full"
                src={characters.image}
                alt=""
              />
              <p className="py-2">{characters.name}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Cast;
