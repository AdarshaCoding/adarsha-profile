import React from "react";
import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
