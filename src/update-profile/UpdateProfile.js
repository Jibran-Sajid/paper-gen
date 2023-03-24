import React from "react";
import '../css/background.css';


let UpdateProfile = () => {

    return (

        <React.Fragment>

        {/* Rules */}
            <div class="col-md-5 d-flex align-items-center my-3 my-md-0 my-lg-0">

                <div class="w-100">

                    <div class="card border shadow-sm">
                        <div class="card-header border-dark">
                            <span class="card-title fs-5 text-dark">Keep in Mind</span>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Name should not contain any speaial character.</li>
                                <li>Email must be a valid one.</li>
                                <li>Contact must be a active one.</li>
                                <li>Please provide a proper address where magazine will be delivered.</li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        {/* Form */}
            <div class="col-md-7 d-flex align-items-center my-3 ">

                <div class="w-100">

                    {/* <!-- Card --> */}
                    <div class="card rounded rounded-3 form shadow">

                        {/* <!-- Card Body --> */}
                        <div class="card-body p-4">

                            <form class="row">

                                {/* <!-- Heading/Title --> */}
                                <div class="col-12 text-center">
                                    <h3><span class="fancy-link pb-1">Update Profile</span></h3>
                                </div>

                                {/* <!-- Name --> */}
                                <div class="col-md-6 mt-4">
                                    <div class="form-floating">
                                        <input type="text" class="form-control input rounded-0" id="name" name="name" placeholder="Name" required />
                                        <label for="name">Name</label>
                                    </div>
                                </div>

                                {/* <!-- Contact --> */}
                                <div class="col-md-6 mt-4">
                                    <div class="form-floating">
                                        <input type="text" class="form-control input rounded-0" id="contact" name="contact" placeholder="Contact" required />
                                        <label for="contact">Contact</label>
                                    </div>
                                </div>

                                {/* <!-- Email --> */}
                                <div class="col-12 mt-4">
                                    <div class="form-floating">
                                        <input type="email" class="form-control input rounded-0" id="email" name="email" placeholder="Email" required />
                                        <label for="email">Email</label>
                                    </div>
                                </div>

                                {/* <!-- Address --> */}
                                <div class="col-12 mt-4">
                                    <div class="form-floating">
                                        <input type="text" class="form-control input rounded-0" id="address" name="address" placeholder="Address" required />
                                        <label for="address">Address</label>
                                    </div>
                                </div>

                                {/* <!-- -- Button -- --> */}
                                <div class="col-12 mt-4">
                                    <button class="btn btn-primary py-2" id="btnSave"> Save </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </React.Fragment>

    )
}

export default UpdateProfile;