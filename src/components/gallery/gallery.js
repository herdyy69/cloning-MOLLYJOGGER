import React from "react";
import Img from "../cmpn/img/img";

const Gallery = () => {
  var img = [];
  for (var i = 0; i < 9; i++) {
    img.push(<Img />);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Featured Products</h3>
          <button className="bg-[#000] text-white mt-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-[#000] hover:text-white">Shop All Products</button>
          <div className="flex flex-row flex-wrap items-center justify-center">{img}</div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row flex-nowrap items-center justify-center pt-10">
          <img className="lg:h-auto md:h-auto w-full object-cover object-center" src="https://cdn.shopify.com/s/files/1/0156/0327/files/bandana_trout_lillian_2018.jpg?9492458649067681237" alt="blog" />
          <img className="lg:h-auto md:h-auto w-full object-cover object-center" src="https://cdn.shopify.com/s/files/1/0156/0327/files/Ad2_85fc6561-255f-4e1d-aa1a-61285ee01160.jpg?v=1613154610" alt="blog" />
          <img className="lg:h-auto md:h-auto w-full object-cover object-center" src="https://cdn.shopify.com/s/files/1/0156/0327/files/DIY-Scrimshaw.jpg?v=1475598338" alt="blog" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
