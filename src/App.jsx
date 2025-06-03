import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/ueber-uns';
import Navbar from './components/Navbar';
import Contact from './components/kontakt';
import ReinachAG from './components/reinach-ag';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Spenden from './components/Spenden';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reinach-ag" element={<ReinachAG />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/spenden" element={<Spenden />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
