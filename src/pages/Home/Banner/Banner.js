import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import "./Banner.css";
import logo from "../../../assets/logo/Logo1.png";
const Banner = () => {
  return (
    <div className="banner-container text-center pb-10">
      <div className="container ">
        <div className="grid justify-center">
          <div className="col-md-6">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid justify-center">
          <div className="col-md-10">
            <h1 className="header-title">
              The Rick & <br /> Morty Wiki
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4 justify-center">
          <div className="col-start-2 col-span-4 flex flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row gap-5 align-items-center header-content">
            <button className="watch-btn w-1/2 flex align-items-center justify-content-center gap-2">
              <FaRegPlayCircle></FaRegPlayCircle>Watch Now
            </button>
            <p className="header-text text-start">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
