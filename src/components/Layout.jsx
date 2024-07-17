import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    
    <div className="p-4 flex flex-col min-h-screen">
      <Navbar/>
         <Outlet />
       <Footer/>
    </div>
  );
}