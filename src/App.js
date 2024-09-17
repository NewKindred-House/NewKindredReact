// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';

// function App() {
//   return (
//     <>
//           {/* <div className="App">
  
//     </div> */}
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </Routes>
//       </Layout>
//     </Router>
//     </>

//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Connect from './pages/Connect';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Work from './pages/Work';
//import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

