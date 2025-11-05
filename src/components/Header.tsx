import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col w-full px-6">
      <div className="absolute left-0 right-0 bg-light flex items-center justify-center py-2.5">
        <p className="hidden sm:block text-gray-500 text-[10px] tracking-widest text-center">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders &gt; $200 | easy 45 day return window.
        </p>

        <p className="block sm:hidden text-gray-500 text-[10px] tracking-widest text-center">
          SHIPPING on orders &gt; $200
        </p>
      </div>

      <div className="flex items-start py-6 mt-[40px]">
        <img src="/Logotype.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
