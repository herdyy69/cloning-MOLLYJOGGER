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
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="/product" target="_blank" rel="noreferrer">
              Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 21v-2a10 10 0 10-5.93-9.14"></path>
                <path d="M3 3L12 12l1.41-1.41"></path>
                <path d="M10 19L21 8"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Img;
