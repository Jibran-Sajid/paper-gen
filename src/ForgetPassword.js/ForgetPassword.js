import React from "react";
import Icon from '../images/forget-password-icon.svg'

let ForgetPassword = () => {
    return (
        <div class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center g-0 min-vh-100">
                <div class="col-lg-5 col-md-8 py-8 py-xl-0">
                    {/* <!-- Card --> */}
                    <div class="card shadow">
                        {/* <!-- Card body --> */}
                        <div class="card-body p-5">
                            <div class="mb-4">
                                <span>
                                    <a class="pe-3" href="#"><img src={Icon} class="mb-4" alt="" /></a>
                                    <h4 class="mb-1 fw-bold d-inline-block">Forgot Your Password?</h4>
                                </span>

                                <p>Fill the form to reset your password.</p>

                                <small>
                                    <ul>
                                        <li>Fill in your email address below.</li>
                                        <li>We'll email you a temporary link.</li>
                                        <li>Use the link to change your password on our secure website.</li>
                                    </ul>
                                </small>
                            </div>

                            {/* <!-- Form --> */}
                            <form>
                                {/* <!-- Email --> */}
                                <div class="mb-3">
                                    <div class="form-floating">
                                        <input type="email" class="form-control input rounded-0" id="email" name="email" placeholder="Email" required />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                {/* <!-- Button --> */}
                                <div class="mb-3 d-grid">
                                    <button type="submit" class="btn btn-primary py-2">
                                        Send Resest Link
                                    </button>
                                </div>
                                {/* <span class="d-block text-center"> Return to <a class="text-decoration-none" href="./">sign in</a></span> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ForgetPassword;