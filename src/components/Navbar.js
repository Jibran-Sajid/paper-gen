export default Navbar = () => {
    return (
        <div>
            {/* <!-- Small screen content -->

<!-- Offcanvas --> */}
            <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenu"
            >
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        <i class="bi bi-book-half"></i>
                        <span class="fs-5 ps-2 fw-semibold"> Roshni </span>
                    </h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    {/* <!-- Menu --> */}
                    <div class="flex-shrink-0 p-3 text-white">
                        <ul class="list-unstyled ps-0">
                            <li class="mb-1">
                                <button
                                    class="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#home-collapse"
                                    aria-expanded="true"
                                >
                                    <span class="pe-2">
                                        <i class="bi bi-house-fill"></i> Home
                                    </span>
                                    <i class="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div class="collapse show" id="home-collapse">
                                    <ul
                                        class="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" class="link-dark fancy-link">Overview</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Updates</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Reports</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <button
                                    class="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#dashboard-collapse"
                                    aria-expanded="false"
                                >
                                    <span class="pe-2"> Dashboard </span>
                                    <i class="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div class="collapse" id="dashboard-collapse">
                                    <ul
                                        class="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" class="link-dark fancy-link">Overview</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Weekly</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Monthly</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Annually</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <button
                                    class="btn btn-toggle align-items-center rounded collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#orders-collapse"
                                    aria-expanded="false"
                                >
                                    <span class="pe-2"> Orders </span>
                                    <i class="bi bi-chevron-right nav-icon"></i>
                                </button>
                                <div class="collapse" id="orders-collapse">
                                    <ul
                                        class="btn-toggle-nav list-unstyled fw-normal ps-4 pb-1 small"
                                    >
                                        <li><a href="#" class="link-dark fancy-link">New</a></li>
                                        <li>
                                            <a href="#" class="link-dark fancy-link">Processed</a>
                                        </li>
                                        <li><a href="#" class="link-dark fancy-link">Shipped</a></li>
                                        <li><a href="#" class="link-dark fancy-link">Returned</a></li>
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
<!-- <div class="container-fluid py-3 sticky-top"> --> */}

            <div class="container border shadow rounded-pill px-5 bg-white sticky-top mt-3">
                <header
                    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2"
                >

                    <a href="#offcanvasMenu" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" class="d-md-none d-lg-none text-decoration-none me-5"> <i class="bi bi-list"></i> </a>

                    <div class="align-items-center col-md-3 mb-2 mb-md-0 text-dark d-md-flex d-lg-flex d-none">
                        <a
                            href="./"
                            class="text-decoration-none"
                        >
                            <img src="./images/forget-password-logo-icon.svg" height="40" alt="" />
                        </a>
                    </div>

                    <ul
                        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-none d-md-flex d-lg-flex"
                    >
                        <li><a href="#" class="nav-link px-2 link-dark"> <span class="fancy-link">Home</span> </a></li>
                        <li><a href="#" class="nav-link px-2 link-dark"> <span class="fancy-link">Features</span> </a></li>
                        <li><a href="#" class="nav-link px-2 link-dark"> <span class="fancy-link">Pricing</span> </a></li>
                        <li><a href="#" class="nav-link px-2 link-dark"> <span class="fancy-link">FAQs</span> </a></li>
                        <li><a href="#" class="nav-link px-2 link-dark"> <span class="fancy-link">About</span> </a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <div class="dropdown">
                            <a class="text-secondary text-decoration-none dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-circle"></i> Username
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Change Password</a></li>
                                <li class="border-top my-2"></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
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