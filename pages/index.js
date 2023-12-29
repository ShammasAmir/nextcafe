import About from "@/components/templates/index/About";
import CardArea from "@/components/templates/index/CardArea";
import Contact from "@/components/templates/index/Contact";
import Food from "@/components/templates/index/Food";
import Slider from "@/components/templates/index/Slider";
import React from "react";

function index() {
  return (
    <>
      <Slider />
      <CardArea />
      <Food />
      <About />
      <Contact />
    </>
  );
}

export default index;
