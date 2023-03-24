import React from 'react';
import ChangePassword from './change-password/ChangePassword';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ForgetPassword from './ForgetPassword.js/ForgetPassword';
import Login from './login/Login';
import UpdateProfile from './update-profile/UpdateProfile';

function App() {
  return (
    <React.Fragment>

      {/* <Login/> */}
      {/* <ForgetPassword/> */}
            

      <Navbar />

      <div class="container">

        <div class="row mt-md-5">

            <ChangePassword />
            <UpdateProfile/>
            
        </div>

      </div>

      <Footer />
    </React.Fragment>
  );
}


export default App;