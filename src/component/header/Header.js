import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
            <div className="container px-3">
                <a href="index.html" className="navbar-brand pe-3">
                    {/* <img src="assets/img/logo.svg" width={47} alt="Silicon" /> */}
                    Silicon
                </a>
                <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
                    <div className="offcanvas-header border-bottom border-light">
                        <h5 className="offcanvas-title text-white">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link active" data-bs-toggle="dropdown" aria-current="page">Landings</a>
                                <div className="dropdown-menu dropdown-menu-dark p-0">
                                    <div className="d-lg-flex">
                                        <div className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0" style={{ margin: '-1px', backgroundColor: '#f3f6ff' }}>
                                            <img src="assets/img/landings.jpg" alt="Landings" />
                                        </div>
                                        <div className="mega-dropdown-column pt-lg-3 pb-lg-4" style={{siMegaDropdownColumnWidth: '15rem'}}>
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="index.html" className="dropdown-item">Template Intro Page</a></li>
                                            <li><a href="landing-mobile-app-showcase-v1.html" className="dropdown-item">Mobile App Showcase v.1</a></li>
                                            <li><a href="landing-mobile-app-showcase-v2.html" className="dropdown-item">Mobile App Showcase v.2</a></li>
                                            <li><a href="landing-mobile-app-showcase-v3.html" className="dropdown-item">Mobile App Showcase v.3<span className="badge bg-success ms-2">New</span></a></li>
                                            <li><a href="landing-product.html" className="dropdown-item d-flex align-items-center">Product Landing</a></li>
                                            <li><a href="landing-saas-v1.html" className="dropdown-item">SaaS v.1</a></li>
                                            <li><a href="landing-saas-v2.html" className="dropdown-item">SaaS v.2</a></li>
                                            <li><a href="landing-saas-v3.html" className="dropdown-item">SaaS v.3</a></li>
                                            <li><a href="landing-saas-v4.html" className="dropdown-item">SaaS v.4</a></li>
                                            <li><a href="landing-saas-v5.html" className="dropdown-item">SaaS v.5<span className="badge bg-success ms-2">New</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="landing-startup.html" className="dropdown-item d-flex align-items-center">Startup</a></li>
                                            <li><a href="landing-financial.html" className="dropdown-item">Financial Consulting</a></li>
                                            <li><a href="landing-online-courses.html" className="dropdown-item">Online Courses</a></li>
                                            <li><a href="landing-medical.html" className="dropdown-item">Medical</a></li>
                                            <li><a href="landing-software-dev-agency-v1.html" className="dropdown-item">Software Dev Agency v.1</a></li>
                                            <li><a href="landing-software-dev-agency-v2.html" className="dropdown-item">Software Dev Agency v.2</a></li>
                                            <li><a href="landing-software-dev-agency-v3.html" className="dropdown-item">Software Dev Agency v.3</a></li>
                                            <li><a href="landing-conference.html" className="dropdown-item">Conference</a></li>
                                            <li><a href="landing-digital-agency.html" className="dropdown-item">Digital Agency</a></li>
                                            <li><a href="landing-blog.html" className="dropdown-item">Blog Homepage</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu dropdown-menu-dark">
                                <div className="d-lg-flex pt-lg-3">
                                    <div className="mega-dropdown-column">
                                        <h6 className="text-light px-3 mb-2">About</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="about-v1.html" className="dropdown-item py-1">About v.1</a></li>
                                            <li><a href="about-v2.html" className="dropdown-item py-1">About v.2</a></li>
                                        </ul>
                                        <h6 className="text-light px-3 mb-2">Blog</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="blog-list-with-sidebar.html" className="dropdown-item py-1">List View with Sidebar</a></li>
                                            <li><a href="blog-grid-with-sidebar.html" className="dropdown-item py-1">Grid View with Sidebar</a></li>
                                            <li><a href="blog-list-no-sidebar.html" className="dropdown-item py-1">List View no Sidebar</a></li>
                                            <li><a href="blog-grid-no-sidebar.html" className="dropdown-item py-1">Grid View no Sidebar</a></li>
                                            <li><a href="blog-simple-feed.html" className="dropdown-item py-1">Simple Feed</a></li>
                                            <li><a href="blog-single.html" className="dropdown-item py-1">Single Post</a></li>
                                            <li><a href="blog-podcast.html" className="dropdown-item py-1">Podcast</a></li>
                                        </ul>
                                    </div>
                                    <div className="mega-dropdown-column">
                                        <h6 className="text-light px-3 mb-2">Portfolio</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="portfolio-grid.html" className="dropdown-item py-1">Grid View</a></li>
                                            <li><a href="portfolio-list.html" className="dropdown-item py-1">List View</a></li>
                                            <li><a href="portfolio-slider.html" className="dropdown-item py-1">Slider View</a></li>
                                            <li><a href="portfolio-courses.html" className="dropdown-item py-1">Courses</a></li>
                                            <li><a href="portfolio-single-project.html" className="dropdown-item py-1">Single Project</a></li>
                                            <li><a href="portfolio-single-course.html" className="dropdown-item py-1">Single Course</a></li>
                                        </ul>
                                        <h6 className="text-light px-3 mb-2">Services</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="services-v1.html" className="dropdown-item py-1">Services v.1</a></li>
                                            <li><a href="services-v2.html" className="dropdown-item py-1">Services v.2</a></li>
                                            <li><a href="services-single-v1.html" className="dropdown-item py-1">Service Details v.1</a></li>
                                            <li><a href="services-single-v2.html" className="dropdown-item py-1">Service Details v.2</a></li>
                                        </ul>
                                    </div>
                                    <div className="mega-dropdown-column">
                                        <h6 className="text-light px-3 mb-2">Pricing</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="pricing.html" className="dropdown-item py-1">Pricing Page</a></li>
                                        </ul>
                                        <h6 className="text-light px-3 mb-2">Contacts</h6>
                                        <ul className="list-unstyled mb-3">
                                            <li><a href="contacts-v1.html" className="dropdown-item py-1">Contacts v.1</a></li>
                                            <li><a href="contacts-v2.html" className="dropdown-item py-1">Contacts v.2</a></li>
                                            <li><a href="contacts-v3.html" className="dropdown-item py-1">Contacts v.3</a></li>
                                        </ul>
                                        <h6 className="text-light px-3 mb-2">Specialty</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="404-v1.html" className="dropdown-item py-1">404 Error v.1</a></li>
                                            <li><a href="404-v2.html" className="dropdown-item py-1">404 Error v.2</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown">Account</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a href="account-details.html" className="dropdown-item">Account Details</a></li>
                                <li><a href="account-security.html" className="dropdown-item">Security</a></li>
                                <li><a href="account-notifications.html" className="dropdown-item">Notifications</a></li>
                                <li><a href="account-messages.html" className="dropdown-item">Messages</a></li>
                                <li><a href="account-saved-items.html" className="dropdown-item">Saved Items</a></li>
                                <li><a href="account-collections.html" className="dropdown-item">My Collections</a></li>
                                <li><a href="account-payment.html" className="dropdown-item">Payment Details</a></li>
                                <li><a href="account-signin.html" className="dropdown-item">Sign In</a></li>
                                <li><a href="account-signup.html" className="dropdown-item">Sign Up</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="components/typography.html" className="nav-link">UI Kit</a>
                        </li>
                        <li className="nav-item">
                            <a href="docs/getting-started.html" className="nav-link">Docs</a>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas-header border-top border-light">
                    <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-primary w-100" target="_blank" rel="noopener">
                        <i className="bx bx-cart fs-4 lh-1 me-1" />
                        &nbsp;Buy now
                    </a>
                </div>
            </div>
            {/* <div className="pe-lg-1 ms-auto me-4" data-bs-theme="dark">
                <div className="form-check form-switch mode-switch" data-bs-toggle="mode">
                    <input type="checkbox" className="form-check-input" id="theme-mode" />
                    <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Light</label>
                    <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark</label>
                </div>
            </div> */}
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
                <i className="bx bx-cart fs-5 lh-1 me-1" />
                &nbsp;Buy now
            </a>
        </div>
      </header >
    )
}

export default Header
