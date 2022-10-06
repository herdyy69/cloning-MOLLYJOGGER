const Product = () => {
  return (
    <div className="flex flex-row flex-nowrap items-start justify-around">
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col items-start justify-start">
          <div className="w-auto p-4">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-start py-2 gap-1">
              <a href="#item1" className="">
                <img src="https://placeimg.com/800/200/arch" className="w-32" />
              </a>
              <a href="#item2" className="">
                <img src="https://placeimg.com/800/200/arch" className="w-32" />
              </a>
              <a href="#item3" className="">
                <img src="https://placeimg.com/800/200/arch" className="w-32" />
              </a>
              <a href="#item4" className="">
                <img src="https://placeimg.com/800/200/arch" className="w-32" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold text-center text-gray-800">Product Name</h1>
          <p className=" text-gray-600">$99.99</p>
          <hr className="w-full" />
          <span className="my-1"></span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add to Cart</button>
          <span className="my-1"></span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Buy Now</button>
          <span className="my-1"></span>
          <p className=" text-gray-600 text-center w-full">MORE PAYMENT OPTIONS</p>
          <hr className="w-full" />
          <span className="my-3"></span>
          <div className="flex flex-row flex-wrap items-center justify-center py-2 gap-1">
            <p className=" text-gray-600">
              "As we floated down the beautiful James River, past the spot where the Cape Fair dock now stands, on past the mouth of the James into the White River and Taneycomo little did I realize the change that was destined to take place. Camping
              each night close to fresh spring water, cleaning and cooking our fish in this beautiful setting and under the stars was an experience for me never to be forgotten." - Jim Strimple 1922 Refuse to Sink - Classic Float Knife. Sure to be a
              favorite for the boat dock, tackle box and canoe. Natural cork handle and rust-resistant metal components. 4" x 1¼" x ¾" closed with 2¾" stainless steel blade. Set includes: Cork Knife Survival Whistle 10 Pk Waterproof Matches + Striker
              8' Paracord Type III + Keeper * Due to restrictions, this item is only available for ground shipping within the contiguous United States.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
