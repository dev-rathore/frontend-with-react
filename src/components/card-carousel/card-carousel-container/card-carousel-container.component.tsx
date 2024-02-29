import React, { useRef, useState, PropsWithChildren } from "react";
import ScrollButton, { ScrollTo } from "./scroll-button.component";
import CardCarouselContainerHeader from "./card-carousel-container-header.component";

type CardCarouselContainerProps = {
  title: string;
  viewAllUrl: string;
};

const CardCarouselContainer: React.FC<PropsWithChildren<CardCarouselContainerProps>> = ({
  children,
  title,
  viewAllUrl,
}) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftScrollable, setIsLeftScrollable] = useState(false);
  const [isRightScrollable, setIsRightScrollable] = useState(false);

  const scrollTo = (direction: string) => {
    if (direction === 'left') {
      cardsContainerRef.current?.scrollTo({
        left: cardsContainerRef.current?.scrollLeft + 800,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      cardsContainerRef.current?.scrollTo({
        left: cardsContainerRef.current?.scrollLeft - 800,
        behavior: 'smooth',
      });
    }
  };

  const checkIsScrolled = () => {
    const scrollLeft = cardsContainerRef.current?.scrollLeft as number;
    const scrollWidth = cardsContainerRef.current?.scrollWidth as number;
    const clientWidth = cardsContainerRef.current?.clientWidth as number;

    if (scrollLeft === scrollWidth - clientWidth) {
      setIsLeftScrollable(false);
    } else {
      setIsLeftScrollable(true);
    }

    if (scrollLeft === 0) {
      setIsRightScrollable(false);
    } else {
      setIsRightScrollable(true);
    }
  };

  return (
    <div
      className="w-full relative"
      style={{
        backgroundColor: '#0F1016FF',
      }}
    >
      <CardCarouselContainerHeader
        title={title}
        viewAllUrl={viewAllUrl}
      />
      <ScrollButton
        isScrollable={isRightScrollable}
        onInitialPosition={true}
        onClick={() => scrollTo(ScrollTo.Right)}
        scrollTo={ScrollTo.Right}
      />
      <ScrollButton
        isScrollable={isLeftScrollable}
        onInitialPosition={isRightScrollable}
        onClick={() => scrollTo(ScrollTo.Left)}
        scrollTo={ScrollTo.Left}
      />
      <div
        ref={cardsContainerRef}
        className="flex gap-2 px-2 pt-12 pb-8 overflow-x-scroll hide-scrollbar"
        onScroll={checkIsScrolled}
      >
        {children}
      </div>
    </div>
  );
}

export default CardCarouselContainer;