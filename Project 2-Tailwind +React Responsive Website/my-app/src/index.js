import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/NavBar';
import App from './App';
 import './index.css';
 import NewsLetter from './Components/NewsLetter';
 import Analytics from './Components/Analytics';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar></NavBar>
    <Hero></Hero>
    <Analytics></Analytics>
    <NewsLetter></NewsLetter>
    <Cards></Cards>
    <Footer></Footer>
  </React.StrictMode>
);


