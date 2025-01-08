import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import { Nav } from "../Components/Nav";
import locomotiveScroll from "locomotive-scroll";
import Card from "../Components/Card";
import LocomotiveScroll from "locomotive-scroll";
import { Posts } from "./Posts";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    let locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <div className="w-full relative bg-zinc-100 min-h-screen overflow-x-hidden">
      <img
        src="./public/assets/logo.png"
        alt="logo"
        className="w-[60rem] opacity-15 ml-[80rem] mt-[30rem] absolute   object-cover"
      />
      {/* <img src='./src/assets/logo.png' alt="logo" className="w-[50rem] opacity-10  left-[rem] mt-[80rem] absolute  object-cover" /> */}
      <Link to="/">
        <Hero />
      </Link>
      <Nav />
      <Card />
    </div>
  );
};

export default Home;
