import About from "@/components/templates/index/About";
import CardArea from "@/components/templates/index/CardArea";
import Contact from "@/components/templates/index/Contact";
import Foods from "@/components/templates/index/Foods";
import Slider from "@/components/templates/index/Slider";
import React from "react";

function index() {
  return (
    <>
      <Slider />
      <CardArea />
      <Foods />
      <About />
      <Contact />
    </>
  );
}

export default index;
