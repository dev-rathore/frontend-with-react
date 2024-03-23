import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

const HomePage: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-5 text-center'>
      <h1 className='text-2xl font-medium'>Welcome to Frontend with React</h1>
      <div className='flex flex-col gap-3'>
        <Link to={routes.DISNEY_PLUS_HOTSTAR}>Disney Plus Hotstar</Link>
        <Link to={routes.CUSTOMISED_VIDEO_PLAYER}>Customised Video Player</Link>
        <Link to={routes.FORM_HANDLING}>Form Handling</Link>
        <Link to ={routes.UI_IMPLEMENTATION}>UI Implementations</Link>
        <Link to={routes.EXPERIMENT}>Experiment</Link>
      </div>
    </div>
  );
}

export default HomePage;
