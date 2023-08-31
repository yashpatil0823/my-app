// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
   <Header/>
   <Sidebar/>
   <Body/>
   <Footer/>
    </>
  );
}

export default App;
