import React from 'react'
import { Row, Col, Container, Card, Stack } from 'react-bootstrap'
import imgsrc from './img/image04-thumbnail.webp'


const Layout = () => {
  return (
    <>

      <Col xs='4' lg='4' sm='12' md='6'>
        <Card>
          <img src={imgsrc} alt="" />

          <Stack direction='horizontal' className='justify-content-between'>
            <div className='bg-primary rounded'>icon</div>
            <div>
              <h4 className='m-0'>reactify style engine</h4>
              <span>meta inscription</span>
            </div>
            <div>
              <span>$ 2</span>
              <span>$ 8</span>
            </div>
          </Stack>
        </Card>
      </Col>

    </>
  )
}

const Home = () => {

  return (
    <section>
      <div id="wrapper">
        <div class="float-text show-on-scroll">
          <span><a href="#">Scroll to top</a></span>
        </div>
        <div class="scrollbar-v show-on-scroll"></div>
        
        <div id="de-loader"></div>
        <!-- page preloader close -->

        <!-- header begin -->
        <header class="transparent">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex sm-pt10">
                  <div class="de-flex-col">
                    <div class="de-flex-col">
                      <!-- logo begin -->
                      <div id="logo">
                        <a href="index.html">
                          <img class="logo-main" src="images/logo.png" alt="" >
                            <img class="logo-mobile" src="images/logo-mobile.png" alt="" >
                            </a>
                          </div>
                          <!-- logo close -->
                      </div>
                    </div>
                    <div class="de-flex-col header-col-mid">
                      <ul id="mainmenu">
                        <li><a class="menu-item" href="index.html">Home</a>
                          <ul>
                            <li><a class="menu-item" href="index.html">Homepage One</a></li>
                            <li><a class="menu-item" href="homepage-2.html">Homepage Two</a></li>
                            <li><a class="menu-item" href="homepage-3.html">Homepage Three</a></li>
                            <li><a class="menu-item" href="homepage-4.html">Homepage Four</a></li>
                            <li><a class="menu-item" href="homepage-5.html">Homepage Five</a></li>
                            <li><a class="menu-item" href="homepage-6.html">Homepage Six</a></li>
                            <li><a class="menu-item" href="homepage-7.html">[New] Homepage Seven</a></li>
                            <li><a class="menu-item" href="onepage-1.html">[New] Onepage One</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="menu-item" href="game-server-1.html">Game Servers</a>
                          <ul>
                            <li><a class="menu-item" href="game-server-1.html">Games Server One</a></li>
                            <li><a class="menu-item" href="game-server-2.html">Games Server Two</a></li>
                            <li><a class="menu-item" href="pricing-table-one.html">Pricing Table One</a></li>
                            <li><a class="menu-item" href="pricing-table-two.html">Pricing Table Two</a></li>
                            <li><a class="menu-item" href="pricing-table-three.html">Pricing Table Three</a></li>
                            <li><a class="menu-item" href="pricing-table-four.html">Pricing Table Four</a></li>
                          </ul>
                        </li>
                        <li><a class="menu-item" href="locations.html">Locations</a></li>
                        <li><a class="menu-item" href="#">Support</a>
                          <ul>
                            <li><a class="menu-item" href="knowledgebase.html">Knowledgebase</a></li>
                            <li><a class="menu-item" href="faq.html">FAQ</a></li>
                            <li><a class="menu-item" href="contact.html">Contact</a></li>
                          </ul>
                        </li>
                        <li><a class="menu-item" href="news.html">News</a></li>
                        <li><a class="menu-item" href="#">Company</a>
                          <ul>
                            <li><a class="menu-item" href="about.html">About Us</a></li>
                            <li><a class="menu-item" href="affliate.html">Affliates</a></li>
                          </ul>
                        </li>
                        <li><a class="menu-item" href="#">More Pages</a>
                          <ul>
                            <li><a class="menu-item" href="login.html">Login</a></li>
                            <li><a class="menu-item" href="register.html">Register</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="de-flex-col">
                      <div class="menu_side_area">
                        <a href="https://themeforest.net/cart/configure_before_adding/48636843" target="_blank" class="btn-main btn-line"><span>Buy Now</span></a>
                        <span id="menu-btn"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </header>
        <!-- header close -->
        <!-- content begin -->
        <div class="no-bottom no-top" id="content">
          <div id="top"></div>

          <!--<div class="de_ribbon d-ribbon wow fadeInDown animated" data-wow-delay="1.5s">SAVE 50%</div>-->

          <section id="section-hero" class="jarallax" aria-label="section">
            <div class="de-gradient-edge-bottom"></div>
            <img src="demo/bg.webp" class="jarallax-img" alt="">
              <div class="container z-1000">
                <div class="row align-items-center">

                  <div class="spacer-single"></div>

                  <div class="col-lg-5">
                    <div class="subtitle mb-3 wow fadeInUp">Made by Elite Author</div>
                    <h2 class="wow fadeInUp">Website Template for Game Hosting</h2>
                    <p class="wow fadeInUp">Playhost is an exclusive website template specially made for <strong>Game Hosting</strong> services with a sleek and modern design. Made using only the finest coding and design practices by an experienced ThemeForest author with over 15 years of experience.</p>

                    <a class="btn-main wow fadeInUp" href="#section-preview"><span>Demo Preview</span></a>
                  </div>

                  <div class="col-lg-7 offset">
                    <div class="spacer-single d-lg-none"></div>
                    <div class="spacer-double d-lg-none"></div>
                    <div class="de-images-stack">
                      <img src="demo/m1.jpg" class="di-1 wow fadeIn" data-wow-delay=".9s" alt="">
                        <img src="demo/m2.jpg" class="di-2 wow fadeIn" data-wow-delay=".6s" alt="">
                          <img src="demo/m3.jpg" class="di-3 wow fadeIn" data-wow-delay=".3s" alt="">

                            <div class="d_wrap_sm-box b1 text-center wow fadeIn" data-wow-delay="1.2s">
                              <h6>Made with</h6>
                              <h3>Bootstrap 5</h3>
                            </div>

                            <div class="d_wrap_sm-box b2 text-center wow fadeIn" data-wow-delay="1.5s">
                              <h6>Lifetime</h6>
                              <h3>Free Updates</h3>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </section>

                <section id="section-highlight" class="no-bottom no-top">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="subtitle wow fadeInUp mb-3">Why choose Playhost</div>
                        <h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Amazing Features</h2>
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="clearfix"></div>

                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/booststrap-5.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Bootstrap 5 Framework</h4>
                            Playhost using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s" >
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/flash.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Blazing Speed</h4>
                            Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/responsive.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Responsive Layouts</h4>
                            Playhost layouts can fit to all screens sizes so it looks great on any kind of devices. One website for all devices.
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/font-awesome-6.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Font Awesome 6</h4>
                            Font Awesome is the world's most popular icon set and toolkit. We include latest version of Font Awesome.
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/swiper-slider.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Swiper Slider</h4>
                            Swiper is the most modern free and open source slider with hardware accelerated transitions and amazing native behavior.
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                        <div class="padding40 h-100 rounded-10" data-bgcolor="rgba(255,255,255,.015)">
                          <img src="demo/icons/recaptcha.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">
                            <h4>Form with reCAPTCHA</h4>
                            All forms on Playhost using reCAPTCHA by Google to protects your site from spam and abuse.
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay="0s">
                        <div class="padding40 text-center" data-bgcolor="rgba(0, 0, 0, .25)">
                          <h2 class="mb-1">21,000+</h2>
                          Clients Trust Designesia
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".2s">
                        <div class="padding40 text-center" data-bgcolor="rgba(0, 0, 0, .25)">
                          <h2 class="mb-1">15</h2>
                          Years of Experiences
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".4s">
                        <div class="padding40 text-center" data-bgcolor="rgba(0, 0, 0, .25)">
                          <h2 class="mb-1">Free</h2>
                          Lifetime Update
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="no-bottom">
                  <div class="container relative">
                    <div class="row">
                      <div class="col-md-12 wow fadeInUp">
                        <div class="spacer-10 sm-hide"></div>
                        <div class="col-lg-6">
                          <div class="subtitle wow fadeInUp mb-3">Pixel perfect</div>
                          <h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Tailored elements</h2>
                        </div>
                      </div>
                    </div>

                    <div class="row g-5">
                      <div class="col-lg-3 col-sm-6 text-center wow fadeInRight" data-wow-delay=".2s">
                        <a href="pricing-table-one.html">
                          <img src="demo/elements/pricing-table-1.webp" class="img-fluid mb-3 rounded-10" alt="">
                            <h4>Pricing Table 1</h4>
                        </a>
                      </div>

                      <div class="col-lg-3 col-sm-6 text-center wow fadeInRight" data-wow-delay=".4s">
                        <a href="pricing-table-two.html">
                          <img src="demo/elements/pricing-table-2.webp" class="img-fluid mb-3 rounded-10" alt="">
                            <h4>Pricing Table 2</h4>
                        </a>
                      </div>

                      <div class="col-lg-3 col-sm-6 text-center wow fadeInRight" data-wow-delay=".6s">
                        <a href="game-server-1.html">
                          <img src="demo/elements/games.webp" class="img-fluid mb-3 rounded-10" alt="">
                            <h4>Games List</h4>
                        </a>
                      </div>

                      <div class="col-lg-3 col-sm-6 text-center wow fadeInRight" data-wow-delay=".8s">
                        <a href="index.html">
                          <img src="demo/elements/slider.webp" class="img-fluid mb-3 rounded-10" alt="">
                            <h4>Slider</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="section-preview" aria-label="section">
                  <div class="container relative">
                    <div class="row">
                      <div class="col-md-12 wow fadeInUp">
                        <div class="spacer-10 sm-hide"></div>
                        <div class="col-lg-6">
                          <div class="subtitle wow fadeInUp mb-3">All demo are included</div>
                          <h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Demo preview</h2>
                        </div>

                        <div class="row gh-4 sequence">

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="index.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-1.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Main</h5>
                            With hero slider
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-7.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-7.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3"><span>New</span> Homepage Seven</h5>
                            New scheme color + hero slider
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-2.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-2.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Two</h5>
                            With hero thumbnail slider
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-3.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-3.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Three</h5>
                            With hero image
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-4.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-4.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Four</h5>
                            With hero carousel
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-5.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-5.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Five</h5>
                            With hero video background
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="homepage-6.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/homepage-6.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Homepage Six</h5>
                            With hero slider
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="onepage-1.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/onepage-1.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3"><span>New</span> Onepage One</h5>
                            Onapage version
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="game-server-1.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/games.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Game Server One</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="game-server-2.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/games-2.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Game Server Two</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="pricing-table-one.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/server-single-one.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Pricing Table One</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="pricing-table-two.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/server-single-two.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Pricing Table Two</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="pricing-table-three.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/server-single-three.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Pricing Table Three</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="pricing-table-four.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/server-single-four.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3"><span>New</span> Pricing Table Four</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="locations.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/locations.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Locations</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="knowledgebase.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/knowledgebase.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Knowledgebase</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="faq.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/faq.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">FAQ</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="contact.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/contact.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Contact</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="news.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/news.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">News</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="about.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/about.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">About</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="affliate.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/affliate.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Affliates</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="login.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/login.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Login</h5>
                          </div>

                          <div class="col-md-4 gallery-item text-center mb20">
                            <a class="d_demo_img wow" target="_blank" href="register.html">
                              <span class="d-overlay"><span>Live Preview</span></span>
                              <img src="demo/preview/register.webp" class="color img-fluid wow " alt="">
                            </a>
                            <h5 class="s3">Register</h5>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!-- content close -->

              <footer>
                <div class="container">
                  <div class="row gx-5">
                    <div class="col-lg-4">
                      <img src="images/logo.png" alt="" >
                        <div class="spacer-20"></div>
                        <p>Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt in elit non sed ut velit ullamco aliquip. Nulla cupidatat elit amet sed labore ut et consequat nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse dolor laboris non duis sunt.</p>
                    </div>
                    <div class="col-lg-4">
                      <div class="row">
                        <div class="col-lg-6 col-sm-6">
                          <div class="widget">
                            <h5>Game Server</h5>
                            <ul>
                              <li><a href="#">Thunder and City</a></li>
                              <li><a href="#">Mystic Racing Z</a></li>
                              <li><a href="#">Silent Wrath</a></li>
                              <li><a href="#">Funk Dungeon</a></li>
                              <li><a href="#">Galactic Oddsey</a></li>
                              <li><a href="#">Warfare Legend</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="widget">
                            <h5>Pages</h5>
                            <ul>
                              <li><a href="#">Game Server</a></li>
                              <li><a href="#">Knowledgebase</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Affliates</a></li>
                              <li><a href="#">Locations</a></li>
                              <li><a href="#">News</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="widget">
                        <h5>Newsletter</h5>
                        <form action="https://madebydesignesia.com/themes/playhost/blank.php" class="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                          <div class="col text-center">
                            <input class="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" > <a href="#" id="btn-subscribe"><i class="arrow_right bg-color-secondary"></i></a>
                              <div class="clearfix"></div>
                          </div>
                        </form>
                        <div class="spacer-10"></div>
                        <small>Your email is safe with us. We don't spam.</small>
                        <div class="spacer-30"></div>
                        <div class="widget">
                          <h5>Follow Us on</h5>
                          <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-discord"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="subfooter">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="de-flex">
                          <div class="de-flex-col">
                            <a href="index.html">
                              Copyright 2023 - Playhost by Designesia
                            </a>
                          </div>
                          <ul class="menu-simple">
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </section>
          )
}

          export default Home
