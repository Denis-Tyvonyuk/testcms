const WhatFansSay = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="flex justify-center items-center flex-col max-w-[550px] gap-4">
        <div className="flex justify-center items-center ">
          <span className="text-blue text-5xl">What are our fans saying?</span>
        </div>
        <div className="flex justify-center items-center max-w-[500px]">
          <p className="text-1xl text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="grid place-items-center w-full py-4">
        <div className="grid grid-cols-10 gap-2 w-max overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <img
              key={i}
              src={`/women1.jpg`}
              alt={`woman-${i + 1}`}
              className="w-[130px] h-[130px] object-cover rounded-xl shadow-md max-w-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatFansSay;
