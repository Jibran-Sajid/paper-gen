import React from 'react';
import ChangePassword from './change-password/ChangePassword';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './css/background.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* <!-- Container --> */}
      <div class="container">

        {/* <!-- Row --> */}
        <div class="row mt-md-5">
            <ChangePassword />
        </div>
        {/* <!-- Row --> */}

      </div>
      {/* <!-- Container --> */}

      <Footer />
    </div>
  );
}


export default App;