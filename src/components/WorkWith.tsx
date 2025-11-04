import React from "react";

const WorkWith = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-gradient-to-b from-light to-white items-center flex-col py-30 gap-10">
        <div className="flex items-center justify-center text-gray-500">
          as seen in
        </div>
        <div className="flex justify-center items-center px-6">
          <div className="flex flex-row justify-center items-center gap-10">
            <img
              src="company1.png"
              className="w-[180px] h-[25px] lg:flex hidden"
            />
            <img src="company1.png" className="w-[180px] h-[25px]" />
            <img src="company1.png" className="w-[180px] h-[25px]" />
            <img src="company1.png" className="w-[180px] h-[25px]" />
            <img src="company1.png" className="w-[180px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
