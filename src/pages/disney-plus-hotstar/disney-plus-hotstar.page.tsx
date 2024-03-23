import React from 'react';
import { CardCarousel } from '../../components';
import { VERTICAL_CARD_DATA } from '../../constants/vertical-card';
import { CarouselType } from '../../components/types/card';
import { HORIZONTAL_CARD_DATA } from '../../constants/horizontal-card';
import { TERTIARY_CARD_DATA } from '../../constants/tertiary-card';

import './disney-plus-hotstar.styles.css';

const DisneyPlusHotstar: React.FC = () => {
  return (
    <div id='disney-plus-hotstar' className='py-16'>
      <CardCarousel
        items={VERTICAL_CARD_DATA}
        title="Trending Now"
        viewAllUrl='/experiment'
        carouselType={CarouselType.VERTICAL}
      />
      <CardCarousel
        items={HORIZONTAL_CARD_DATA}
        title="Trending Now"
        viewAllUrl='/random'
        carouselType={CarouselType.HORIZONTAL}
      />
      <CardCarousel
        items={TERTIARY_CARD_DATA}
        title={"Continue Watching"}
        viewAllUrl='/experiment'
        carouselType={CarouselType.TERTIARY}
      />
    </div>
  );
}

export default DisneyPlusHotstar;
