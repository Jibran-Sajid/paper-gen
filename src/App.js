import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UpdateProfile from './update-profile/UpdateProfile';

function App() {
  return (

    <React.Fragment>

      <Navbar />

      <div class="container">
        <div class="row mt-md-5">

            <UpdateProfile/>
            
        </div>
      </div>

      <Footer />

    </React.Fragment>
  );
}


export default App;