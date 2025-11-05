import { useState, useEffect } from "react";

const Comments = () => {
  const comments = [
    {
      name: "Jane S.",
      avatar: "/commentUser.png",
      text: "Overjoyed with my loungewear set! Quality product on every level — even the packaging smelled like herbs.",
    },
    {
      name: "Emily R.",
      avatar: "/commentUser.png",
      text: "Super soft fabric and comfy fit. I wear mine all day! Absolutely worth every penny.",
    },
    {
      name: "Sophia L.",
      avatar: "/commentUser.png",
      text: "Perfect for lazy weekends. Shipping was quick, and the quality is outstanding.",
    },
    {
      name: "Anna P.",
      avatar: "/commentUser.png",
      text: "Love the minimal design and sustainable packaging. My new favorite brand!",
    },
    {
      name: "Laura W.",
      avatar: "/commentUser.png",
      text: "The fabric feels luxurious and durable. I’ve already ordered more colors!",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const total = comments.length;

  // Detect screen size to adjust visible comments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // phones
      } else {
        setVisibleCount(3); // tablets/desktops
      }
    };
    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setStartIndex((prev) => (prev + 1) % total);
  const prev = () => setStartIndex((prev) => (prev - 1 + total) % total);

  const visible = Array.from({ length: visibleCount }).map(
    (_, i) => comments[(startIndex + i) % total]
  );

  return (
    <div className="flex justify-center items-center px-4">
      <div className="relative flex items-center justify-center py-10 w-full max-w-[1200px]">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-[50px] text-4xl font-light text-gray-400 hover:text-gray-700 w-10 h-10 flex items-center justify-center transition"
          aria-label="Previous"
        >
          {"<"}
        </button>

        {/* Comments Grid */}
        <div
          className={`flex gap-4 ${
            visibleCount === 1 ? "flex-col items-center" : "flex-row"
          }`}
        >
          {visible.map((comment, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-3 border border-[#EAEAEA] shadow-lg rounded-2xl p-4 w-[260px] bg-white transition-all duration-300"
            >
              {/* Avatar + name + stars */}
              <div className="flex items-center gap-3">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="w-[45px] h-[45px] rounded-full object-cover shadow-md"
                />
                <div className="flex flex-col items-start justify-center">
                  <img src="/star.svg" alt="Stars" className="w-[70px]" />
                  <span className="text-gray-500 font-medium text-sm">
                    {comment.name}
                  </span>
                </div>
              </div>

              {/* Comment text */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-[50px] text-4xl font-light text-gray-400 hover:text-gray-700 w-10 h-10 flex items-center justify-center transition"
          aria-label="Next"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
