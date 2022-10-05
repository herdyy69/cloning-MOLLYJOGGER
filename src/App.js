import React from "react";
import Carousel from "./components/Carousel/carousel";
import Header from "./components/header/header";
import Gallery from "./components/gallery/gallery";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
