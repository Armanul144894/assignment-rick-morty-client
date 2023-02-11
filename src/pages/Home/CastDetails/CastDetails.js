import React from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../../assets/logo/Logo1.png";
import "./CastDetails.css";

const CastDetails = () => {
  const cast = useLoaderData();
  console.log(cast);
  return (
    <div className="container mx-auto">
      <div className="grid justify-center">
        <img className="logo " src={logo} alt="" />
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid  flex-grow h-32 card  rounded-box place-items-center">
          <h2 className="cast-name">{cast.name}</h2>
          <img className="cast-img" src={cast.image} alt="" />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card  rounded-box place-items-center">
          content
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
