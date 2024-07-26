// import React from 'react';
// import { Link } from 'react-router-dom';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-primary text-white p-4">
//         <nav>
//           <Link to="/" className="mr-4">Home</Link>
//           <Link to="/about" className="mr-4">About</Link>
//         </nav>
//         <div>Header</div>
//       </header>
//       <main className="flex-grow p-4">
//         {children}
//       </main>
//       <footer className="bg-secondary text-white p-4 text-center">
//         Footer Content
//       </footer>
//     </div>
//   );
// }

// export default Layout;

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

