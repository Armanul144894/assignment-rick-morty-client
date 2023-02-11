import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
import Carousel from "react-grid-carousel";
import "./Episode.css";

const Episode = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  console.log(allEpisodes);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setAllEpisodes(data.results));
  }, []);
  return (
    <div className="mt-5 container mx-auto px-10 py-10">
      <h1 className="text-white mx-4">Episodes</h1>

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
        //   arrowRight={<ArrowBtn type="right" />}
        //   arrowLeft={<ArrowBtn type="left" />}
      >
        {allEpisodes.map((episodes) => (
          <Carousel.Item key={episodes.id}>
            <div className="h-100 p-2">
              <p>{episodes.episode}</p>
              <h6>{episodes.name}</h6>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Episode;
