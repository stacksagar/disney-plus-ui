import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Slider1 from './assets/images/slide1.jpg';
import Slider2 from './assets/images/slide2.jpg';
import Slider3 from './assets/images/slide3.jpg';

import firstSlide1 from './assets/images/first_slide1.svg';
import firstSlide2 from './assets/images/first_slide2.svg';
import firstSlide3 from './assets/images/first_slide3.svg';
import firstSlide4 from './assets/images/first_slide4.svg';
import firstSlide5 from './assets/images/first_slide5.svg';

import Slide1 from './assets/images/slide (1).jpg';
import Slide2 from './assets/images/slide (2).jpg';
import Slide3 from './assets/images/slide (3).jpg';
import Slide4 from './assets/images/slide (4).jpg';
import Slide5 from './assets/images/slide (5).jpg';
import Slide6 from './assets/images/slide (6).jpg';
import Slide7 from './assets/images/slide (7).jpg';
import Slide8 from './assets/images/slide (8).jpg';
import Slide9 from './assets/images/slide (9).jpg';
import Slide10 from './assets/images/slide (10).jpg';
import Slide11 from './assets/images/slide (11).jpg';
import Slide12 from './assets/images/slide (12).jpg';
import Slide13 from './assets/images/slide (13).jpg';
import Slide14 from './assets/images/slide (14).jpg';
import Slide15 from './assets/images/slide (15).jpg';
import Slide16 from './assets/images/slide (16).jpg';

import BgSlide from './components/BgSlide';
import MySlide from './components/MySlide';

function App() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [slide_show, set_slide_show] = React.useState(1);

  const slideNext = () => {
    set_slide_show((prev) => prev + 1);
  }; 

  const slidePrev = () => {
    set_slide_show((prev) => prev - 1);
  };

  useEffect(() => {
    document.title = 'Disney Plus - UI'
    setInterval(() => { 
      slideNext()
    },3400)
  }, [])

  return (
    <>
      <button
        style={{ background: '#00000099' }}
        onClick={() => setNavOpen((is) => !is)}
        className="focus:outline-none z-40 transition-none text-white font-xl rounded fixed top-3 left-3"
      >
        <svg
          className="w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Navbar nav={{ navOpen, setNavOpen }} />

      <div className="w-full p-2">
        <div className="w-full h-56 relative">
          <button
            onClick={slideNext}
            className="focus:outline-none focus:ring font-bold transition-none p-2 flex items-center justify-center text-white bg-gray-500 rounded-full absolute top-0 bottom-0 my-auto h-10 w-10 left-5 z-30 text-xs"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={slidePrev}
            className="focus:outline-none focus:ring font-bold transition-none p-2 flex items-center justify-center text-white bg-gray-500 rounded-full absolute top-0 bottom-0 my-auto h-10 w-10 right-5  z-30 text-xs"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <img
            src={Slider1}
            alt="slider"
            className={` ${
              slide_show % 1 === 0 ? 'slide_show' : 'slide_hide'
            } w-full rounded h-full object-cover absolute top-0 left-0`}
          />
          <img
            src={Slider2}
            alt="slider"
            className={` ${
              slide_show % 2 === 0 ? 'slide_show' : 'slide_hide'
            } w-full rounded h-full object-cover absolute top-0 left-0`}
          />
          <img
            src={Slider3}
            alt="slider"
            className={` ${
              slide_show % 3 === 0 ? 'slide_show' : 'slide_hide'
            } w-full rounded h-full object-cover absolute top-0 left-0`}
          />
        </div>

        <BgSlide
          images={[
            firstSlide1,
            firstSlide2,
            firstSlide3,
            firstSlide4,
            firstSlide5,
          ]}
        />
        <MySlide
          text="Recommended For You"
          images={[Slide1, Slide2, Slide3, Slide4, Slide5]}
        />

        <MySlide
          text="Continue Watching"
          images={[Slide6, Slide7, Slide8, Slide9, Slide10]}
        />

        <MySlide
          text="Disney+ Originals"
          images={[Slide11, Slide12, Slide13, Slide14, Slide15]}
        />

        <MySlide text="Trending Now" images={[Slide16]} />
      </div>
    </>
  );
}

export default App;
