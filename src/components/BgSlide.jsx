import React from 'react';

const BgSlide = ({ images }) => {
  return (
    <div className="mt-8 mx-2">
      <div className="w-full flex">
        <div className="shadow-custom w-4/12 md:w-2/10 mr-1 bg-gray-700 rounded  p-7 cursor-pointer flex justify-center items-center">
          <img
            className="transform hover:scale-110"
            src={images[0]}
            alt="slider_image"
          />
        </div>

        <div className="shadow-custom w-4/12 md:w-2/10 mx-2 bg-gray-700 rounded  p-7 cursor-pointer flex justify-center items-center">
          <img
            className="transform hover:scale-110"
            src={images[1]}
            alt="slider_image"
          />
        </div>

        <div className="shadow-custom w-4/12 md:w-2/10 mx-2 bg-gray-700 rounded p-7 cursor-pointer flex justify-center items-center">
          <img
            className="transform hover:scale-110"
            src={images[2]}
            alt="slider_image"
          />
        </div>

        <div className="shadow-custom w-2/10 md-none flex mx-2 bg-gray-700 rounded  p-7 cursor-pointer justify-center items-center">
          <img
            className="transform hover:scale-110"
            src={images[3]}
            alt="slider_image"
          />
        </div>

        <div className="shadow-custom w-2/10 md-none flex ml-1 bg-gray-700 rounded  p-7 cursor-pointer justify-center items-center">
          <img
            className="transform hover:scale-110"
            src={images[4]}
            alt="slider_image"
          />
        </div>
      </div>
    </div>
  );
};

export default BgSlide;
