import React from "react";
import {
  CarouselType,
  HorizontalCardItem,
  TertiaryCardItem,
  VerticalCardItem,
} from "../types/card";
import CardCarouselContainer from "./card-carousel-container/card-carousel-container.component";
import HorizontalCard from "./horizontal-card.component";
import VerticalCard from "./vertical-card.component";
import TertiaryCard from "./tertiary-card.component";

type CardCarouselProps = {
  carouselType: string;
  items: VerticalCardItem[] | HorizontalCardItem[] | TertiaryCardItem[];
  title: string;
  viewAllUrl: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({
  carouselType,
  items,
  title,
  viewAllUrl,
}) => {
  switch (carouselType) {
    case CarouselType.VERTICAL:
      return (
        <CardCarouselContainer
          title={title}
          viewAllUrl={viewAllUrl}
        >
          {
            (items as VerticalCardItem[]).map((card, index) => (
              <VerticalCard
                key={index}
                description={card.description}
                categories={card.categories}
                previewImage={card.previewImage}
              />
            ))
          }
        </CardCarouselContainer>
      );
    case CarouselType.HORIZONTAL:
      return (
        <CardCarouselContainer
          title={title}
          viewAllUrl={viewAllUrl}
        >
          {
            (items as HorizontalCardItem[]).map((card, index) => (
              <HorizontalCard
                key={index}
                title={card.title}
                description={card.description}
                previewImage={card.previewImage}
              />
            ))
          }
        </CardCarouselContainer>
      );
    case CarouselType.TERTIARY:
      return (
        <CardCarouselContainer
          title={title}
          viewAllUrl={viewAllUrl}
        >
          {
            (items as TertiaryCardItem[]).map((card, index) => (
              <TertiaryCard
                key={index}
                title={card.title}
                timeLeft={card.timeLeft}
                viewMoreUrl={card.viewMoreUrl}
                previewImage={card.previewImage}
              />
            ))
          }
        </CardCarouselContainer>
      );
  }
}

export default CardCarousel;
