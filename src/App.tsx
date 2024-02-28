import './App.css'
import {
  CardCarousel,
} from './components';
import { CARD_DATA } from './constants/card';

const App = () => {
  return (
    <>
      <CardCarousel
        items={CARD_DATA}
        title="Trending Now"
      />
      <CardCarousel
        items={CARD_DATA}
        title="Trending Now"
      />
      <CardCarousel
        items={CARD_DATA}
        title="Trending Now"
      />
    </>
  )
}

export default App
