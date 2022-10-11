import React from "react";

const Carousel = () => {
  var dataCarousel = [
    {
      id: 1,
      prev: "#" + 4,
      next: "#" + 2,
      image:
        "https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_1.jpg?v=116214185443250550681618587160",
    },
    {
      id: 2,
      prev: "#" + 1,
      next: "#" + 3,
      image:
        "https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_2.jpg?v=56977053002427581761618587160",
    },
    {
      id: 3,
      prev: "#" + 2,
      next: "#" + 4,
      image:
        "https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_3.jpg?v=56977053002427581761618587160",
    },
    {
      id: 4,
      prev: "#" + 3,
      next: "#" + 1,
      image:
        "https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/homepage_hero_image_4.jpg?v=56977053002427581761618587160",
    },
  ];

  return (
    <div className="carousel w-full h-96">
      {dataCarousel.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="carousel-item relative w-full"
        >
          <img src={item.image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={item.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={item.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
