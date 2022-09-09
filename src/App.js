import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Games/Home';
import GameDetail from './components/GameDetail';
import HomeHeader from './components/HomeHeader';
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <HomeHeader />
                <Home />
              </>
)}
          />
          <Route path="/details/:id" element={<GameDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
