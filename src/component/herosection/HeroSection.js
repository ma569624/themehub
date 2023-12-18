import React from 'react'

const HeroSection = () => {
    return (
        <section className="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
            <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75" />
            <div className="container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3" data-bs-theme="dark">
                <div className="row gy-5">
                    <div className="col-xl-5 col-lg-6">
                        <div className="position-relative zindex-5 text-lg-start text-center">
                            <h5 className="my-2">Welcome!</h5>
                            <h1 className="display-3 mb-4">Learn <span className="text-primary">IT Online</span> with No Limits</h1>
                            <p className="fs-lg mb-5">Enjoy our great selection of IT courses. Choose from more than 25K online
                                video courses and become an IT expert now!</p>
                            {/* Desktop form */}
                            <form className="d-none d-sm-flex mb-5">
                                <div className="input-group d-block d-sm-flex input-group-lg me-3">
                                    <input type="text" className="form-control w-50" placeholder="Search courses..." />
                                    <select className="form-select w-50">
                                        <option value selected disabled>Categories</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Game Development">Game Development</option>
                                        <option value="Software Testing">Software Testing</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Network & Security">Network &amp; Security</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-icon btn-primary btn-lg" aria-label="Search">
                                    <i className="bx bx-search" />
                                </button>
                            </form>
                            {/* Mobile form */}
                            <form className="d-sm-none mb-5">
                                <input type="text" className="form-control form-control-lg mb-2" placeholder="Search courses..." />
                                <select className="form-select form-select-lg mb-2">
                                    <option value selected disabled>Categories</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile Development">Mobile Development</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Game Development">Game Development</option>
                                    <option value="Software Testing">Software Testing</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Network & Security">Network &amp; Security</option>
                                </select>
                                <button type="submit" className="btn btn-icon btn-primary btn-lg w-100 d-sm-none" aria-label="Search">
                                    <i className="bx bx-search" />
                                </button>
                            </form>
                            <div className="d-flex align-items-center mt-auto mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5">
                                <div className="d-flex me-3">
                                    <div className="d-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '52px', height: '52px' }}>
                                        <img src="https://silicon.createx.studio/assets/img/avatar/08.jpg" className="rounded-circle" width={48} alt="Avatar" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{ width: '52px', height: '52px' }}>
                                        <img src="https://silicon.createx.studio/assets/img/avatar/07.jpg" className="rounded-circle" width={48} alt="Avatar" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{ width: '52px', height: '52px' }}>
                                        <img src="https://silicon.createx.studio/assets/img/avatar/09.jpg" className="rounded-circle" width={48} alt="Avatar" />
                                    </div>
                                </div>
                                <span className="fs-sm"><span className="text-primary fw-semibold">10K+</span> students are already
                                    with us</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="position-relative ms-xl-0 ms-lg-4">
                            <div className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1" style={{ width: '125%', maxWidth: '49.75rem' }}>
                                <div className="p-md-0 p-5">
                                    <img src="https://silicon.createx.studio/assets/img/landing/software-agency-3/hero-bg.png" alt="Shape" className="hero-animation-spin p-md-0 p-5" />
                                </div>
                            </div>
                            <div className="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                                <div className="col">
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}>
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                                <span className="hero-animation-fade text-white">I need AI engineers</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}>
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                                <span className="hero-animation-fade hero-animation-delay-2 text-white">We are
                                                    looking for Shopify Experts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-sm-5 mt-2 pt-sm-5">
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}>
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                                <span className="hero-animation-fade hero-animation-delay-1 text-white">I need
                                                    MVP for startup</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}>
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                                <span className="hero-animation-fade hero-animation-delay-3 text-white">I need
                                                    web development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

    )
}

export default HeroSection
