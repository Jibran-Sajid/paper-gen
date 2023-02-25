import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './css/background.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
}

export default App;
