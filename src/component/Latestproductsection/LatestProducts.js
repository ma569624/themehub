import React from 'react'

const LatestProducts = () => {
  return (
    <section className="container mb-5 py-lg-5">
        {/* <h2 className="h1 mb-4 pb-3 text-center">Latest</h2> */}
        <div className="row">
          <div className="col-lg-5 col-12 mb-lg-0 mb-4">
            {/* Article */}
            <article className="card h-100 border-0 shadow-sm">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more" />
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark" />
                </a>
                <img src="https://silicon.createx.studio/assets/img/landing/digital-agency/blog/01.jpg" className="card-img-top" alt="Image" />
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</a>
                  <span className="fs-sm text-muted">12 hours ago</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">A study on smartwatch design qualities and people’s preferences</a>
                </h3>
              </div>
              <div className="card-footer py-4">
                <div className="d-inline-flex align-items-center position-relative me-3">
                  <img src="https://silicon.createx.studio/assets/img/avatar/08.jpg" className="rounded-circle me-3" width={48} alt="Avatar" />
                  <div>
                    <a href="#" className="nav-link p-0 fw-bold text-decoration-none stretched-link">Jerome Bell</a>
                    <span className="fs-sm text-muted">Marketing Specialist</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col">
            {/* Article */}
            <article className="card border-0 shadow-sm overflow-hidden mb-4">
              <div className="row g-0">
                <div className="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover" style={{backgroundImage: 'url(assets/img/landing/digital-agency/blog/02.jpg)', minHeight: '15rem'}}>
                  <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more" />
                  <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                    <i className="bx bx-bookmark" />
                  </a>
                  <img src="https://silicon.createx.studio/assets/img/landing/digital-agency/blog/02.jpg" className="card-img-top" alt="Image" />
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Design</a>
                      <span className="fs-sm text-muted border-start ps-3 ms-3">1 day ago</span>
                    </div>
                    <h3 className="h5">
                      <a href="blog-single.html">Brand analysis: second step to the brand identity</a>
                    </h3>
                    <hr className="my-4" />
                    <div className="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                      <div className="d-flex align-items-center position-relative me-3">
                        <img src="https://silicon.createx.studio/assets/img/avatar/08.jpg" className="rounded-circle me-3" width={48} alt="Avatar" />
                        <div>
                          <a href="#" className="nav-link p-0 fw-bold text-decoration-none stretched-link">Annette Black</a>
                          <span className="fs-sm text-muted">Product Manager</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-sm-0 mt-4 text-muted">
                        <div className="d-flex align-items-center me-3">
                          <i className="bx bx-like fs-lg me-1" />
                          <span className="fs-sm">8</span>
                        </div>
                        <div className="d-flex align-items-center me-3">
                          <i className="bx bx-comment fs-lg me-1" />
                          <span className="fs-sm">7</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bx bx-share-alt fs-lg me-1" />
                          <span className="fs-sm">4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* Article */}
            <article className="card border-0 shadow-sm overflow-hidden">
              <div className="row g-0">
                <div className="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover" style={{backgroundImage: 'url(assets/img/landing/digital-agency/blog/03.jpg)', minHeight: '15rem'}}>
                  <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more" />
                  <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                    <i className="bx bx-bookmark" />
                  </a>
                  <img src="https://silicon.createx.studio/assets/img/landing/digital-agency/blog/03.jpg" className="card-img-top h-100" alt="Image" />
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Tips &amp; Advice</a>
                      <span className="fs-sm text-muted border-start ps-3 ms-3">May 24, 2023</span>
                    </div>
                    <h3 className="h5">
                      <a href="blog-single.html">How to check the website before releasing it?</a>
                    </h3>
                    <hr className="my-4" />
                    <div className="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                      <div className="d-flex align-items-center position-relative me-3">
                        <img src="https://silicon.createx.studio/assets/img/avatar/08.jpg" className="rounded-circle me-3" width={48} alt="Avatar" />
                        <div>
                          <a href="#" className="nav-link p-0 fw-bold text-decoration-none stretched-link">Marvin McKinney</a>
                          <span className="fs-sm text-muted">Senior UI/UX Designer</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-sm-0 mt-4 text-muted">
                        <div className="d-flex align-items-center me-3">
                          <i className="bx bx-like fs-lg me-1" />
                          <span className="fs-sm">8</span>
                        </div>
                        <div className="d-flex align-items-center me-3">
                          <i className="bx bx-comment fs-lg me-1" />
                          <span className="fs-sm">7</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bx bx-share-alt fs-lg me-1" />
                          <span className="fs-sm">4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  )
}

export default LatestProducts
