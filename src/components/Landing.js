import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Wtf from "./Wtf";
import Buy from "./Buy";
import Pfp from "./Pfp";
import Memes from "./Memes";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <Nav />
      <Hero />
      <Wtf />
      <Buy />
      <Pfp />
      <Memes />
      <Footer />
    </div>
  );
};

export default LandingPage;
