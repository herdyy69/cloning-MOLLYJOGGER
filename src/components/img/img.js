import React from "react";

const Img = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <img className="lg:h-auto md:h-auto w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
      <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
    </div>
  );
};

export default Img;
