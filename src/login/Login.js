import React from "react";
import '../css/login.css';
import LoginImage from '../images/istockphoto-1281150061-612x612.jpg'

let Login = () => {
    return (
        <React.Fragment>

            <div class="container min-vh-100">

                <div class="row min-vh-100">

                    {/* Image */}
                    <div class="col-md-6 d-flex align-items-center my-3 my-md-0 my-lg-0 d-none d-sm-flex d-md-flex d-lg-flex">
                        <img src={LoginImage} class="img-fluid mx-auto" alt="" />
                    </div>

                    {/* Login Form */}
                    <div class="col-md-6 d-flex align-items-center my-3 my-md-0 my-lg-0">

                        <div class="w-100 px-lg-5">

                            {/* <!-- -- Card -- --> */}
                            <div class="card form rounded rounded-3 border border-secondary shadow">

                                {/* <!-- -- Card Body -- --> */}
                                <div class="card-body p-4">

                                    {/* <!-- -- Heading -- --> */}
                                    <h3 class="text-center mt-3 heading">
                                        <span class="fancy-link">Sign in</span>
                                    </h3>

                                    {/* <!-- -- Form -- --> */}
                                    <form class="row py-4 needs-validation" method="POST" id="loginForm">

                                        {/* <!-- -- Email -- --> */}
                                        <div class="col-12 mt-4">
                                            <div class="form-floating">
                                                <input type="email" class="form-control input rounded-0" id="email" name="email" placeholder="Email" required />
                                                <label for="email">Email</label>
                                            </div>
                                        </div>

                                        {/* <!-- -- Password -- --> */}
                                        <div class="col-12 mt-4">
                                            <div class="form-floating">
                                                <input type="password" class="form-control input rounded-0" id="password" name="password" placeholder="Password" required />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>

                                        {/* <!-- -- Remember me -- --> */}
                                        <div class="col-6 mt-4 d-flex align-items-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="rememberMe" value="true" id="rememberMe" />
                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                        </div>

                                        {/* <!-- Forget Password --> */}
                                        <div class="col-6 mt-4 text-end">
                                            <a class="text-dark" href="./forget-password.html"> <span>Forget Password?</span> </a>
                                        </div>

                                        {/* <!-- -- Button -- --> */}
                                        <div class="col-md-6 d-grid mt-4">
                                            <button class="btn btn-primary py-2" id="btnSave"> Login </button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                            {/* <!-- Card --> */}


                        </div>
                    </div>

                </div>
                {/* Row */}
            </div>
            {/* Container */}

        </React.Fragment>
    )
}

export default Login