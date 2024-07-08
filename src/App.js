import {BrowserRouter, Routes, Route} from 'react-router-dom';



//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import Content from './pages/Content';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:tempId" element={<Content type="tv" />} />
        <Route path="/movie/:tempId" element={<Content type="movie" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
