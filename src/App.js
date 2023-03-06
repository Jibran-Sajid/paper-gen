import React from 'react';
import ChangePassword from './change-password/ChangePassword';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './css/background.css';

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}


export default App;