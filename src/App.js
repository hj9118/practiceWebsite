import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Service from './pages/Service';
import SS from './pages/SS';
import Portfolio from './pages/Portfolio';
import PM from './pages/PM';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Protected from './pages/Protected';
import Changelog from './pages/Changelog';
import Licenses from './pages/Licenses';
import NotFound from './pages/NotFound';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:name' element={<Product />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service-single' element={<SS />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:name' element={<PM />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/post/:name' element={<Post />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/style-guide' element={<Guide />} />
        <Route path='/401' element={<Protected />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='/licenses' element={<Licenses />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
