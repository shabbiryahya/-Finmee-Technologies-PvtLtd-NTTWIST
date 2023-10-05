import React from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Homepage from './components/pages/Homepage';

import Heading from './components/title/Heading';
import Nato from './components/navbar/Nato';
import HomeContent from './components/pages/HomeContent';


function App() {
  return (
    <div>

    <Heading></Heading>                    {/* Title of the NTWIST homepage */}
    <Nato></Nato>                          {/* Navbar */}
    <Homepage></Homepage>                  {/* homepage background image */}
    <HomeContent></HomeContent>            {/* homepage website content */}
    <Footer></Footer>                       {/* customised fotter fot ntwist */}
  
    </div>
  );
}

export default App;
