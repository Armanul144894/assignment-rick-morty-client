import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../../assets/logo/Logo1.png";
import "./CastDetails.css";
import status from "../../../assets/PNG/Status.png";
import species from "../../../assets/PNG/Species.png";
import gender from "../../../assets/PNG/Gender.png";
import origin from "../../../assets/PNG/origin.png";
import location from "../../../assets/PNG/Location.png";
import episodeImg from "../../../assets/PNG/episode.png";
import episode from "../../../assets/PNG/Episode(s).png";
import redirect from '../../../assets/PNG/Redirect.png'

const CastDetails = () => {
  const cast = useLoaderData();

  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  return (
    <div className="container castDetails-container mx-auto">
      <div className="grid justify-center mb-20">
        <img className="logo " src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-20 justify-around w-full lg:flex-row">
        <div className="grid w-full flex-grow rounded-box place-items-center">
          <div>
            <h2 className="cast-name text-center">{cast.name}</h2>
            <div className="cast-img">
              <img src={cast.image} alt="" />
            </div>
          </div>
        </div>
        <div className="divider lg:w-[1px] lg:h-[320px] lg:my-auto md:w-[320px] md:h-[1px] md:mx-auto w-[320px] h-[1px] mx-auto  lg:divider-horizontal"></div>
        <div className="grid w-full lg:mx-8 flex-grow">
          <div className="flex cast-status gap-10 mx-5">
            <div className="card rounded-box w-full">
              <img src={status} alt="" />
              <p>Status</p>
              <h1>{cast.status}</h1>
            </div>
            <div className="card rounded-box w-full">
              <img src={species} alt="" />
              <p>Species</p>
              <h1>{cast.species}</h1>
            </div>
            <div className="card rounded-box w-full">
              <img src={gender} alt="" />
              <p>Gender</p>
              <h1>{cast.gender}</h1>
            </div>
          </div>

          <div className="origin">
            <img src={origin} alt="" />
            <p>Origin</p>
            <div className="flex justify-between items-center">
              <h1>{cast.origin.name}</h1>
              <img src={redirect} alt="" />
            </div>
          </div>

          <div className="location rounded">
            <img src={location} alt="" />
            <p>Last known location</p>
            <div className="flex justify-between items-center">
              <h1>{cast.location.name}</h1>
              <img src={redirect} alt="" />
            </div>
          </div>

          <div className="episode ">
            <div className="scroll">
              <div className="pl-5">
                <img className="episode-img my-5" src={episodeImg} alt="" />
                <img src={episode} alt="" />
              </div>
              <div className="my-4 pl-4">
                {episodes.map((episode) => (
                  <ol key={episode.id} className="list-disc ml-10 pt-2">
                    <li>{episode.name}</li>
                  </ol>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
