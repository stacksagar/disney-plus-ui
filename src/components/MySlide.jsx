import React from 'react';

const MySlide = ({ images, text }) => {
  return (
    <div className="mt-8 mx-2">
      <h4 className="text-gray-300 text-sm mb-1">
        {text}
        {text.includes('Recommended') && <div id="new">new</div>}
      </h4>
      <div className="w-full" id="smallSlide">
        {images[0] && (
          <div>
            <img src={images[0]} alt="slider_image" />
          </div>
        )}

        {images[1] && (
          <div>
            <img src={images[1]} alt="slider_image" />
          </div>
        )}

        {images[2] && (
          <div>
            <img src={images[2]} alt="slider_image" />
          </div>
        )}

        {images[3] && (
          <div>
            <img src={images[3]} alt="slider_image" />
          </div>
        )}

        {images[4] && (
          <div>
            <img src={images[4]} alt="slider_image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MySlide;
