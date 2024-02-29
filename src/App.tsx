import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import {
  CardCarousel,
  CustomizedVideoPlayer,
  Experiment,
  Random,
} from './components';
import { VERTICAL_CARD_DATA } from './constants/vertical-card';
import { CarouselType } from './components/types/card';
import { HORIZONTAL_CARD_DATA } from './constants/horizontal-card';
import { TERTIARY_CARD_DATA } from './constants/tertiary-card';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='my-16'>
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
          }
        />
        <Route
          path='/random'
          element={
            <Random />
          }
        />
        <Route
          path='/experiment'
          element={
            <Experiment />
          }
        />
        <Route
          path='/customised-video-player'
          element={
            <CustomizedVideoPlayer />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
