import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center pt-10">
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <div className="flex flex-row flex-nowrap items-center justify-between">
            <div className="w-full h-full p-4">
              <img
                className="lg:h-auto md:h-auto w-full object-cover object-center"
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/Home-AboutUs_f0e70350-c20f-4c3a-9063-b76a0f2f6833.jpg?v=1473346930"
                alt="blog"
              />
            </div>
            <div className="flex flex-col items-start justify-start lg:h-auto md:h-auto w-full">
              <h1 className="text-3xl font-bold text-center text-gray-800">
                About Us
              </h1>
              <p className=" text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nisl nec ultricies lacinia, odio magna condimentum
                mauris, sit amet ultricies lorem ipsum sed libero. Nullam
                auctor, nisl nec ultricies lacinia, odio magna condimentum
                mauris, sit amet ultricies lorem ipsum sed libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
