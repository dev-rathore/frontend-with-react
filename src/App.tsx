import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { AppRoutes } from './routes';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
