import React, { useEffect, useRef, useState } from "react";
import Card from "./card.component";
import { CardItem } from "../types/card";
import { IoIosArrowForward } from "react-icons/io";
import ScrollButton, { ScrollTo } from "./scroll-button.component";

type CardCarouselProps = {
  items: CardItem[];
  title: string;
};

const CardCarousel: React.FC<CardCarouselProps> = ({
  items,
  title,
}) => {
  const viewAllRef = useRef<HTMLDivElement>(null);
  const [isLeftScrolling, setIsLeftScrolling] = useState(false);
  const [isRightScrolling, setIsRightScrolling] = useState(false);
  const [onLeftHover, setOnLeftHover] = useState(false);
  const [onRightHover, setOnRightHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkScrollPosition = (currentScrollPosition: number) => {
    if (currentScrollPosition === 0) {
      setIsLeftScrolling(false);
    } else {
      setIsLeftScrolling(true);
    }

    if (currentScrollPosition > 0) {
      setIsRightScrolling(true);
    } else {
      setIsRightScrolling(false);
    }
  }

  const onSubmitNext = (direction: string) => {
    if (viewAllRef.current && direction === 'left') {
      viewAllRef.current.scrollTo({ left: viewAllRef.current.scrollLeft + 800, behavior: 'smooth' });
      setScrollPosition(viewAllRef.current.scrollLeft + 800);
    } else if (viewAllRef.current && direction === 'right') {
      viewAllRef.current.scrollTo({ left: viewAllRef.current.scrollLeft - 800, behavior: 'smooth' });
      setScrollPosition(viewAllRef.current.scrollLeft - 800);
    }
  };

  const handleMouseHoverOnScrollButton = (
    scrollButton: string,
    mouseBehavior: string,
  ) => {
    if (scrollButton === 'left' && mouseBehavior === 'enter') {
      setOnLeftHover(true);
    } else if (scrollButton === 'left' && mouseBehavior === 'leave' && !isLeftScrolling) {
      setOnLeftHover(false);
    } else if (scrollButton === 'right' && mouseBehavior === 'enter') {
      setOnRightHover(true);
    } else if (scrollButton === 'right' && mouseBehavior === 'leave' && !isRightScrolling) {
      setOnRightHover(false);
    }
  }

  useEffect(() => {
    if (scrollPosition === 0) {
      checkScrollPosition(0);
    } else {
      checkScrollPosition(scrollPosition);
    }
  }, [viewAllRef.current?.scrollLeft]);

  return (
    <div
      className="w-full px-2 pb-10 relative"
      style={{
        backgroundColor: '#0F1016FF',
      }}
    >
      <div
        className="flex justify-between py-3 text-xl font-semibold text-white"
      >
        <div>
          {title}
        </div>
        <div
          className="flex items-center justify-center text-base rounded-full px-4"
          onClick={() => onSubmitNext('left')}
        >
          View All <IoIosArrowForward />
        </div>
      </div>
      <div
        className="relative"
      >
        <ScrollButton
          isScrolling={isRightScrolling || onRightHover}
          onMouseEnter={() => handleMouseHoverOnScrollButton(ScrollTo.Right, 'enter')}
          onMouseLeave={() => handleMouseHoverOnScrollButton(ScrollTo.Right, 'leave')}
          onClick={() => onSubmitNext(ScrollTo.Right)}
          scrollTo={ScrollTo.Right}
        />
        <ScrollButton
          isScrolling={isLeftScrolling || onLeftHover}
          onClick={() => onSubmitNext(ScrollTo.Left)}
          onMouseEnter={() => handleMouseHoverOnScrollButton(ScrollTo.Left, 'enter')}
          onMouseLeave={() => handleMouseHoverOnScrollButton(ScrollTo.Left, 'leave')}
          scrollTo={ScrollTo.Left}
        />
        <div className="overflow-x-scroll hide-scrollbar">
          <div
            ref={viewAllRef}
            className="flex gap-2"
          >
            {
              items.map((card, index) => (
                <Card
                  key={index}
                  description={card.description}
                  categories={card.categories}
                  previewImage={card.previewImage}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;