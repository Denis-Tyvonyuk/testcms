import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="w-screen bg-light flex items-center justify-center py-2.5 relative left-1/2 right-1/2 -mx-[50vw]">
        <p className="text-gray-500 text-[10px] tracking-widest text-center">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders &gt; $200 | easy 45 day return window.
        </p>
      </div>

      <div className="flex items-start  py-6">
        <img src="/Logotype.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
