import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import "./Banner.css";
import logo from "../../../assets/logo/Logo1.png";
import bubble from "../../../assets/banner/bubble.png";
import portal from "../../../assets/banner/portal.png";
import pill from "../../../assets/banner/pill.png";
import gun from "../../../assets/banner/Gun.png";
import background from "../../../assets/banner/background.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner-container container mx-auto text-center pb-10">
      <div className="container ">
        <div className="grid justify-center">
          <div className="col-md-6">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-[80%] mx-auto">
          <img src={background} alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-[50%] mx-auto flex flex-col-reverse  md:flex-col-reverse lg:flex-row gap-10 ">
          <Link
            to="https://www.youtube.com/watch?v=KQ9Cgdsa9tc" target='_blank'
            className="watch-btn w-[200px] lg:w-full max-w-[200px] "
          >
            <button className="flex align-items-center justify-content-center gap-2">
              <FaRegPlayCircle></FaRegPlayCircle>Watch Now
            </button>
          </Link>
          <p className="header-text text-start">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
