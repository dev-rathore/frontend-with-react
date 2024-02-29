import React, { useRef } from "react";

const Experiment: React.FC = () => {
  const items = new Array(10).fill(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onSubmitNext = (direction: string) => {
    if (direction === 'left') {
      containerRef.current?.scrollTo({
        left: containerRef.current?.scrollLeft + 800,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      containerRef.current?.scrollTo({
        left: containerRef.current?.scrollLeft - 800,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="
        flex
        mt-10
        bg-white
        relative
      "
    >
      <div
        className="
          flex
          overflow-x-scroll
          hide-scrollbar
          py-8
        "
        ref={containerRef}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="
              min-w-64
              h-64
              bg-gray-200
              m-2
              hover:scale-110
              transition-all
              duration-300
              ease-in-out
              cursor-pointer
              border-2
              border-blue-700
              cursor-pointer
            "
          />
        ))}
      </div>
      <div
        onClick={() => onSubmitNext('left')}
        className="
          absolute
          right-0
          top-0
          bg-red-700
          opacity-50
          w-24
          h-full
          flex
          flex-col
          justify-center
          items-center
          cursor-pointer
          hover:opacity-60
          transition-all
          duration-300
          ease-in-out
        "
      >
        Next
      </div>
      <div
        onClick={() => onSubmitNext('right')}
        className="
          absolute
          left-0
          top-0
          bg-red-700
          opacity-50
          w-24
          h-full
          flex
          flex-col
          justify-center
          items-center
          cursor-pointer
          hover:opacity-60
          transition-all
          duration-300
          ease-in-out
        "
      >
        Prev
      </div>
    </div>
  );
};

export default Experiment;
