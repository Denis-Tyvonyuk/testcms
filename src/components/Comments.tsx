import { useState } from "react";

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
  const total = comments.length;

  const next = () => setStartIndex((prev) => (prev + 1) % total);
  const prev = () => setStartIndex((prev) => (prev - 1 + total) % total);

  const visible = [
    comments[startIndex % total],
    comments[(startIndex + 1) % total],
    comments[(startIndex + 2) % total],
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex items-center justify-center py-10 max-w-[1200px]">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-[-40px] text-4xl  w-10 h-10 flex items-center justify-center  transition"
          aria-label="Previous"
        >
          {"<"}
        </button>

        {/* Comments Grid */}
        <div className="flex flex-row gap-4">
          {visible.map((comment, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-3 border border-[#EAEAEA] shadow-lg rounded-2xl p-4 max-w-[260px] bg-white transition-all duration-300"
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
          className="absolute right-[-40px] text-4xl  w-10 h-10 flex items-center justify-center  transition"
          aria-label="Next"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
