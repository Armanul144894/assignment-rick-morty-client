import React, { useEffect, useState } from "react";
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
    <div className="mt-5 container px-10 py-10">
      <h1 className="mx-4 episode-title">Episodes</h1>

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
        {allEpisodes.map((episodes) => (
          <Carousel.Item key={episodes.id}>
            <div className="card card-compact my-4 episode-card text-white">
              <div className="card-body">
                <p>{episodes.episode}</p>
                <span>{episodes.name}</span>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Episode;
