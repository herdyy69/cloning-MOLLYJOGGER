import React from "react";

const Carousel = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="carousel h-96 w-full">
        <div id="slide1" className="carousel-item w-full">
          <img src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_1.jpg?v=116214185443250550681618587160" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item w-full">
          <img src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_3.jpg?v=56977053002427581761618587160" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item w-full">
          <img src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_4.jpg?v=45487677087414059351615235876" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item w-full">
          <img src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_5.jpg?v=74281751592023281681615235877" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
