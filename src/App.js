import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { Main } from './components/Main';

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home countries={countries} setCountries={setCountries} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/country/:name" element={<Details />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
