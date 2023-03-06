import React from 'react';

function Footer(){
    return (
        <React.Fragment>
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start text-dark footer mt-5 border-top mb-2" id="footer">
                {/* <!-- Grid container --> */}
                <div className="container p-3 pb-0 pt-0">
                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Roshni Magazine
                                </h6>
                                <p>Address
                                    <p className="ps-2">
                                        061-6562200 061-6562300 289 Khanewal Road, Near Food Festival Multan
                                    </p>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Programs</h6>
                                <p>
                                    <a className="footer-links"> <span className="credits">Information Technology</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">English</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">Math</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">Physics</span> </a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="footer-links"> <span className="credits">Your Account</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">Become an Affiliate</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">Shipping Rates</span> </a>
                                </p>
                                <p>
                                    <a className="footer-links"> <span className="credits">Help</span> </a>
                                </p>
                            </div>

                            {/* <!-- Grid column --> */}
                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="bi bi-house-fill mr-3"></i> Multan, Pakistan</p>
                                <p><i className="bi bi-envelope-fill mr-3"></i> info@roshnimagazine.com</p>
                                <p><i className="bi bi-phone-fill mr-3"></i> 061-6562200</p>
                                <p><i className="bi bi-printer-fill mr-3"></i> 061-6562300</p>
                                <p>
                                    {/* <!-- Facebook --> */}
                                    <a
                                        className="btn btn-outline-dark btn-floating rounded-circle m-1 text-dark"
                                        role="button"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a
                                        className="btn btn-outline-dark btn-floating rounded-circle m-1 text-dark"
                                        role="button"
                                    >
                                        <i className="bi bi-twitter"></i>
                                    </a>

                                    {/* <!-- Google --> */}
                                    <a
                                        className="btn btn-outline-dark btn-floating m-1 rounded-circle text-dark"
                                        role="button"
                                    >
                                        <i className="bi bi-google"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a
                                        className="btn btn-outline-dark btn-floating m-1 rounded-circle text-dark"
                                        role="button"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}

                    <hr className="mb-3" />

                    {/* <!-- Section: Copyright --> */}
                    <section className=" pt-0">
                        <div className="row d-flex align-items-center">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-8 text-center">
                                {/* <!-- Copyright --> */}
                                <div className="p-1">
                                    © 2020 Copyright:
                                    <a className="text-decoration-none footer-links" href="https://roshni.net.pk" target="_blank">
                                        Roshni Magazine
                                    </a>
                                </div>
                                {/* <!-- Copyright --> */}
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 text-center">
                                <span className="credit">Crafted by</span> <a href="#" className="text-decoration-none crafter">AR</a>
                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                    </section>
                    {/* <!-- Section: Copyright --> */}
                </div>
                {/* <!-- Grid container --> */}
            </footer>
            {/* <!-- Footer --> */}

        </React.Fragment>
    )
}

export default Footer;