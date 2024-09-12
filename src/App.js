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
import Blog from './pages/Blog';
import EnhanceSeo from './pages/EnhanceSeo';
//import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/enhance-seo" element={<EnhanceSeo/>} ></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

