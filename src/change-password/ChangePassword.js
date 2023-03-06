import React from "react"

let ChangePassword = () => {
    return(
        <React.Fragment>
        {/* <!-- Rules --> */}
            <div class="col-md-6 d-flex align-items-center my-3 my-md-0 my-lg-0">
        
                <div class="w-100">
        
                    {/* <!-- Card --> */}
                    <div class="card border shadow-sm">
                        <div class="card-header border-dark">
                            <span class="card-title fs-5 text-dark">Keep in Mind</span>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Minimum password length is eight characters</li>
                                <li>
                                    You must include the following characters in your password
                                    <ul>
                                        <li>One Alphabet</li>
                                        <li>One Number</li>
                                        <li>One Special Character from these [ !@#$%&* ]</li>
                                    </ul>
                                </li>
                                <li>There should be no spaces in the password</li>
                                <li>Must not be the same as previous passwords</li>
                                {/* <!-- <li></li>
                                <li></li> --> */}
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Card --> */}
        
                </div>
        
            </div>
            {/* <!-- Rules --> */}
            
            {/* <!-- Form --> */}
            <div class="col-md-6 d-flex align-items-center my-3 my-md-0 my-lg-0">
        
                <div class="w-100 px-lg-5">
                    
                    {/* <!-- Card --> */}
                    <div class="card rounded rounded-3 form shadow">
        
                        {/* <!-- Card Body --> */}
                        <div class="card-body p-4"> 
        
                            <form class="row">
                                
                                {/* <!-- Heading --> */}
                                <div class="col-12 text-center">
                                    <h3><span class="fancy-link pb-1">Change Password</span></h3>
                                </div>
        
                                {/* <!-- Current Passowrd --> */}
                                <div class="col-12 mt-4">
                                    <div class="form-floating">
                                        <input type="password" class="form-control input rounded-0" id="cPassword" name="cPassword" placeholder="Password" required />
                                        <label for="cPassword">Current Password</label>
                                    </div>
                                </div>
        
                                {/* <!-- New Password --> */}
                                <div class="col-12 mt-4">
                                    <div class="form-floating">
                                        <input type="password" class="form-control input rounded-0" id="newPassword" name="newPassword" placeholder="Password" required />
                                        <label for="newPassword">New Password</label>
                                    </div>
                                </div>
        
                                {/* <!-- Confirm Password --> */}
                                <div class="col-12 mt-4">
                                    <div class="form-floating">
                                        <input type="password" class="form-control input rounded-0" id="confirmPassword" name="confirmPassword" placeholder="Password" required />
                                        <label for="confirmPassword">Confirm Password</label>
                                    </div>
                                </div>
        
                                {/* <!-- -- Button -- --> */}
                                <div class="col-md-6 d-grid mt-4">
                                    <button class="btn btn-primary py-2" id="btnSave"> Login </button>
                                </div>
        
                            </form>
                        
                        </div>
                        {/* <!-- Card body --> */}
        
                    </div>
                    {/* <!-- Card --> */}
        
                </div>
        
            </div>
            {/* <!-- Form --> */}
        
        </React.Fragment>
    )
}

export default ChangePassword;