import React from 'react';
import { Footer, Header, Skills, Work } from './container';
import { Navbar, SocialMedia } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <SocialMedia />
    <Header />
    <Skills />
    <Work />
    <Footer />
  </div>
);

export default App;