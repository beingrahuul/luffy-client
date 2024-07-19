import {BrowserRouter, Routes, Route} from 'react-router-dom';



//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import Content from './pages/Content';
import Search from './pages/Search';
//import MainVideo from './pages/MainVideo';


function App() {
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:tempId" element={<Content type="tv" />} />
        <Route path="/movie/:tempId" element={<Content type="movie" />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
