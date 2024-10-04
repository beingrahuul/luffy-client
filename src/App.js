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
import Dmca from './pages/DMCA.jsx';
import Alert from './components/Alert.jsx';
import HomeToo from './pages/HomeToo.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar  />
      <Alert />
      <Routes>
        <Route path="/" element={<HomeToo />} />
        <Route path="/tv/:id" element={<Content type="tv" />} />
        <Route path="/movie/:id" element={<Content type="movie" />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/genre/:type" element={<Genre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dmca" element={<Dmca/>}/>
       
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
