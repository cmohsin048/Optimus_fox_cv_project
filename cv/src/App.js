import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeNavMenu = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <div id="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </div>
        <Sidebar isOpen={isSidebarOpen} closeNavMenu={closeNavMenu} />
        <Main />
      </div>
    </div>
  );
}

export default App;
