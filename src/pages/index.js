import React from "react";
import About from "../components/about/about";
import Carousel from "../components/Carousel/carousel";
import Gallery from "../components/gallery/gallery";

export default function Index() {
  return (
    <div>
      <Carousel />
      <Gallery />
      <About />
    </div>
  );
}
