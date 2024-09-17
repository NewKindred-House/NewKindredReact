import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
<<<<<<< HEAD
import Connect from './pages/Connect';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
=======
import Blog from './pages/Blog';
import EnhanceSeo from './pages/EnhanceSeo';
import EstablishBrandKeys from './pages/EstablishBrandKeys';
import CommunicateValue from './pages/CommunicateValue';
import EstablishBrandIdentity from './pages/EstablishBrandIdentity';
>>>>>>> 28389d01666afc10fc3869d884c9592788c1af8d
import Work from './pages/Work';
//import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/connect" element={<Connect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/work" element={<Work />} />
=======
          <Route path="/blog" element={<Blog/>} />
          <Route path='/blog/establish-a-strong-brand-identity' element={<EstablishBrandIdentity/>}/>
          <Route path="/blog/enhance-seo" element={<EnhanceSeo/>} />
          <Route path="/blog/keys-to-establish-brand-identity" element={<EstablishBrandKeys/>} />
          <Route path='/blog/communicate-value' element={<CommunicateValue/>} />
          <Route path='/work' element={<Work/>}/>
>>>>>>> 28389d01666afc10fc3869d884c9592788c1af8d
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

