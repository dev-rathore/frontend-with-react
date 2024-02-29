import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type CardCarouselHeaderProps = {
  title: string;
  viewAllUrl: string;
};

const CardCarouselHeader: React.FC<CardCarouselHeaderProps> = ({
  title,
  viewAllUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-between pt-2 px-2 text-xl font-semibold text-white absolute w-full top-0"
    >
      <div>
        {title}
      </div>
      <div
        className="flex items-center justify-center text-base rounded-full px-4"
        onClick={() => navigate(viewAllUrl)}
      >
        View All <IoIosArrowForward />
      </div>
    </div>
  )
};

export default CardCarouselHeader;
