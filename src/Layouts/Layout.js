import React from 'react';
import { Outlet } from 'react-router-dom';
import '../css/App.css';
import SideMenu from './SideMenu';
import logo from '../logo.png';

const Layout = () => {
    return (
      <div className="App">
        <header className="App-header">
        <a href="/" >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        </header>
        <div className="App-body">
          <SideMenu />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  
  export default Layout;