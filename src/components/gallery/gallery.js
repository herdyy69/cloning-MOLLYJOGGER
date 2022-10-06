import React from "react";
import Img from "../img/img";

const data = [
  {
    id: 1,
    title: "Tammy",
    img1: "http://dummyimage.com/248x100.png/ff4444/ffffff",
    img2: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
  },
  {
    id: 2,
    title: "Mirror Mirror",
    img1: "http://dummyimage.com/192x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/143x100.png/cc0000/ffffff",
  },
  {
    id: 3,
    title: "Wrong Man, The",
    img1: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
    img2: "http://dummyimage.com/207x100.png/ff4444/ffffff",
  },
  {
    id: 4,
    title: "Wesley Willis: The Daddy of Rock 'n' Roll",
    img1: "http://dummyimage.com/140x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/193x100.png/dddddd/000000",
  },
  {
    id: 5,
    title: "Dead End",
    img1: "http://dummyimage.com/166x100.png/5fa2dd/ffffff",
    img2: "http://dummyimage.com/137x100.png/cc0000/ffffff",
  },
  {
    id: 6,
    title: "Amreeka",
    img1: "http://dummyimage.com/134x100.png/5fa2dd/ffffff",
    img2: "http://dummyimage.com/190x100.png/dddddd/000000",
  },
  {
    id: 7,
    title: "Backlight",
    img1: "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
    img2: "http://dummyimage.com/182x100.png/dddddd/000000",
  },
  {
    id: 8,
    title: "Habana Blues",
    img1: "http://dummyimage.com/121x100.png/ff4444/ffffff",
    img2: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
  },
  {
    id: 9,
    title: "Closely Watched Trains (Ostre sledované vlaky)",
    img1: "http://dummyimage.com/108x100.png/dddddd/000000",
    img2: "http://dummyimage.com/102x100.png/ff4444/ffffff",
  },
  {
    id: 10,
    title: "Return of the Living Dead, The",
    img1: "http://dummyimage.com/209x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/146x100.png/dddddd/000000",
  },
  {
    id: 11,
    title: "Julian Po",
    img1: "http://dummyimage.com/210x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/124x100.png/ff4444/ffffff",
  },
  {
    id: 12,
    title: "Brigadoon",
    img1: "http://dummyimage.com/127x100.png/dddddd/000000",
    img2: "http://dummyimage.com/103x100.png/ff4444/ffffff",
  },
  {
    id: 13,
    title: "Nomads",
    img1: "http://dummyimage.com/158x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/238x100.png/dddddd/000000",
  },
  {
    id: 14,
    title: "Oculus",
    img1: "http://dummyimage.com/118x100.png/ff4444/ffffff",
    img2: "http://dummyimage.com/220x100.png/ff4444/ffffff",
  },
  {
    id: 15,
    title: "Ed Hardy: Tattoo the World ",
    img1: "http://dummyimage.com/214x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
  },
  {
    id: 16,
    title: "Generation War",
    img1: "http://dummyimage.com/105x100.png/ff4444/ffffff",
    img2: "http://dummyimage.com/249x100.png/dddddd/000000",
  },
  {
    id: 17,
    title: "Marketa Lazarová",
    img1: "http://dummyimage.com/107x100.png/5fa2dd/ffffff",
    img2: "http://dummyimage.com/197x100.png/ff4444/ffffff",
  },
  {
    id: 18,
    title: "My First War",
    img1: "http://dummyimage.com/151x100.png/dddddd/000000",
    img2: "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
  },
  {
    id: 19,
    title: "Zatoichi's Conspiracy (Shin Zatôichi monogatari: Kasama no chimatsuri) (Zatôichi 25)",
    img1: "http://dummyimage.com/101x100.png/dddddd/000000",
    img2: "http://dummyimage.com/143x100.png/ff4444/ffffff",
  },
  {
    id: 20,
    title: "Mona Lisa Smile",
    img1: "http://dummyimage.com/193x100.png/cc0000/ffffff",
    img2: "http://dummyimage.com/118x100.png/dddddd/000000",
  },
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h3 className="text-2xl font-bold text-gray-900 text-center" id="product">
            Featured Products
          </h3>
          <button className="bg-[#000] text-white mt-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-[#000] hover:text-white">Shop All Products</button>
          <div className="flex flex-row flex-wrap items-start justify-start">
            {data.map((data, index) => (
              <Img key={index} data={data} title={data.title} img1={data.img1} img2={data.img2} id={data.id} />
            ))}
          </div>
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
