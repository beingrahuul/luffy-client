import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Content from './pages/Content';
import Search from './pages/Search';
import Genre from './pages/Genre';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:tempId" element={<Content type="tv" />} />
        <Route path="/movie/:tempId" element={<Content type="movie" />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/genre/:type" element={<Genre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
