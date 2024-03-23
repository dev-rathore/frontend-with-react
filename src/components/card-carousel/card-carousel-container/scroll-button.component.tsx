import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export enum ScrollTo {
  Left = 'left',
  Right = 'right',
}

interface ScrollButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  isScrollable: boolean;
  onInitialPosition?: boolean;
  scrollTo: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  isScrollable,
  onInitialPosition,
  scrollTo,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
        absolute
        flex
        flex-col
        py-1
        items-center
        cursor-pointer
        opacity-0
        ${isScrollable ? 'hover:opacity-100' : ''}
        ${isScrollable && onInitialPosition ? 'opacity-100' : ''}
      `}
      style={{
        background: `linear-gradient(${scrollTo === ScrollTo.Left ? '90deg' : '-90deg'}, rgba(22, 24, 31, 0) 0%, #0F1016 100%)`,
        height: '90%',
        left: scrollTo === ScrollTo.Right? 0 : undefined,
        right: scrollTo === ScrollTo.Left? 0 : undefined,
        top: '10%',
        width: '60px',
        zIndex: 4,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div className={`flex items-center ${scrollTo === 'left'? 'justify-end' : 'justify-start'} grow w-full`}>
        <div className="pr-3 text-2xl">
          {scrollTo === ScrollTo.Left ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>
      </div>
    </div>
  );
};


export default ScrollButton;
