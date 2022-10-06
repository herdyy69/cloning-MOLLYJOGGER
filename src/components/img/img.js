import React from "react";

function Img(Props) {
  function handleMouseOver() {
    document.getElementById(Props.id).src = Props.img2;
  }
  function handleMouseOut() {
    document.getElementById(Props.id).src = Props.img1;
  }


  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Props.img1} alt="blog" id={Props.id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{Props.title}</h1>
        </div>
      </div>
      
    </div>
  );
}
export default Img;
