import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

//pages
import Home from './pages/Home.jsx';
import Content from './pages/Content.jsx';
import Search from './pages/Search.jsx';
import Genre from './pages/Genre.jsx';
import NotFound from './pages/NotFound.jsx';
import Dmca from './pages/DMCA.jsx';
import Alert from './components/Alert.jsx';
import HomeToo from './pages/HomeToo.jsx';


function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeToo />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App2;
