import "./App.css";
import Comments from "./components/Comments";
import Header from "./components/Header";
import WhatFansSay from "./components/WhatFansSay";
import WorkWith from "./components/WorkWith";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <div className="flex flex-row items-center justify-center flex-1 w-full px-6 py-10">
        <div className="flex md:justify-between md:gap-[150px] md:flex-row gap-[50px] flex-col-reverse">
          <div className="flex flex-col gap-10 w-full max-w-[700px]">
            <div className="flex">
              <div className="text-blue text-5xl leading-tight">
                <span>Don’t apologize for being comfortable.</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Beautiful, comfortable loungewear for day or night.",
                "No wasteful extras, like tags or plastic packaging.",
                "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-500">
                  <div className="bg-light rounded-full p-2 flex items-center justify-center">
                    <img
                      src="/sunandmoon.png"
                      className="w-[30px] h-[30px]"
                      alt="icon"
                    />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-start items-center">
              <div className="bg-blue-900 rounded-lg">
                <button className=" text-white gap-2 flex flex-row px-4 py-3 ">
                  Customize Your Outfit
                  <img src="/Vector.svg" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute gap-3 flex flex-col max-w-[400px] z-10 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-4 border border-gray-100">
                {/* Top row: avatar + stars + label */}
                <div className="flex flex-row items-center gap-2.5 mb-2">
                  <img
                    src="/commentUser.png"
                    alt="User"
                    className="rounded-2xl shadow-md"
                    width={35}
                    height={35}
                  />
                  <img src="/star.svg" alt="Stars" className="w-[70px]" />
                  <span className="text-xs text-gray-600 font-medium">
                    One of 500+ 5★ Reviews Online
                  </span>
                </div>

                {/* Review text */}
                <p className="text-[11px] leading-snug text-gray-700">
                  Overjoyed with my Loungewear set. I have the jogger and the
                  sweatshirt. Quality product on every level — from the
                  compostable packaging to the supplied washing bag. Even the
                  garments smelled like fresh herbs when I first held them.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative w-full overflow-visible">
            {/* Main container (relative positioning context) */}
            <div className="relative flex items-center justify-center">
              {/* Front image */}
              <div className="z-20">
                <img
                  src="/women1.jpg"
                  alt="Woman 1"
                  className="w-[250px] sm:w-[300px]"
                />
              </div>

              {/* Middle image (slightly behind and to the left) */}
              <div className="absolute right-[-180px] z-0">
                <img
                  src="/women2.png"
                  width={170}
                  className="object-cover h-[300px]"
                  alt="Woman 2"
                />
              </div>

              {/* Back image (behind and to the right) */}
              <div className="absolute left-[-180px] z-10">
                <img
                  src="/women3.jpg"
                  className="object-cover h-[300px]"
                  width={170}
                  alt="Woman 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkWith />
      <WhatFansSay />
      <Comments />
    </div>
  );
}

export default App;
