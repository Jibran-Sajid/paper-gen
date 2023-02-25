import React from 'react';

function Navbar() {
    return (
        <div>
            {/* <!-- Small screen content -->

<!-- Offcanvas --> */}
            <div
                className="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenu"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <i className="bi bi-book-half"></i>
                        <span className="fs-5 ps-2 fw-semibold"> Roshni </span>
                    </h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {/* <!-- Menu --> */}
                    <div className="flex-shrink-0 p-3 text-white">
                        <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                                <button
                                    className="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#home-collapse"
                                    aria-expanded="true"
                                >
                                    <span className="pe-2">
                                        <i className="bi bi-house-fill"></i> Home
                                    </span>
                                    <i className="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div className="collapse show" id="home-collapse">
                                    <ul
                                        className="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" className="link-dark fancy-link">Overview</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Updates</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Reports</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button
                                    className="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#dashboard-collapse"
                                    aria-expanded="false"
                                >
                                    <span className="pe-2"> Dashboard </span>
                                    <i className="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul
                                        className="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" className="link-dark fancy-link">Overview</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Weekly</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Monthly</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Annually</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button
                                    className="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#orders-collapse"
                                    aria-expanded="false"
                                >
                                    <span className="pe-2"> Orders </span>
                                    <i className="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div className="collapse" id="orders-collapse">
                                    <ul
                                        className="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" className="link-dark fancy-link">New</a></li>
                                        <li>
                                            <a href="#" className="link-dark fancy-link">Processed</a>
                                        </li>
                                        <li><a href="#" className="link-dark fancy-link">Shipped</a></li>
                                        <li><a href="#" className="link-dark fancy-link">Returned</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Menu --> */}
                </div>
            </div>
            {/* <!-- Offcanvas -->
<!-- Small screen content end -->

<!-- Large screen content -->

<!-- Navbar -->
<!-- <div className="container-fluid py-3 sticky-top"> --> */}

            <div className="container border shadow rounded-pill px-5 bg-white sticky-top mt-3">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2"
                >

                    <a href="#offcanvasMenu" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" className="d-md-none d-lg-none text-decoration-none me-5"> <i className="bi bi-list"></i> </a>

                    <div className="align-items-center col-md-3 mb-2 mb-md-0 text-dark d-md-flex d-lg-flex d-none">
                        <a
                            href="./"
                            className="text-decoration-none"
                        >
                            <img src="./images/forget-password-logo-icon.svg" height="40" alt="" />
                        </a>
                    </div>

                    <ul
                        className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-none d-md-flex d-lg-flex"
                    >
                        <li><a href="#" className="nav-link px-2 link-dark"> <span className="fancy-link">Home</span> </a></li>
                        <li><a href="#" className="nav-link px-2 link-dark"> <span className="fancy-link">Features</span> </a></li>
                        <li><a href="#" className="nav-link px-2 link-dark"> <span className="fancy-link">Pricing</span> </a></li>
                        <li><a href="#" className="nav-link px-2 link-dark"> <span className="fancy-link">FAQs</span> </a></li>
                        <li><a href="#" className="nav-link px-2 link-dark"> <span className="fancy-link">About</span> </a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <div className="dropdown">
                            <a className="text-secondary text-decoration-none dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle"></i> Username
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Change Password</a></li>
                                <li className="border-top my-2"></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            {/* <!-- </div> -->
<!-- Navbar --> */}

        </div>
    )
}

export default Navbar;