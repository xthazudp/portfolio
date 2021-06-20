import React from 'react';
import Features from '../Common/Feature/FeatureComp';
import Testimonial from '../Common/Testimonial/TestimonialComp';

import WelcomeArea from '../Common/WelcomeArea/WelcomeAreaComp';
// import './HomeComponent.scss';

const Home = () => {
  return (
    <>
      {/* <!--================Home Banner Area =================--> */}
      <section className="home_banner_area">
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <img src="img/personal.jpg" alt="" />
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Hello Everybody, i am</h6>
                    <h3>Sudip Shrestha</h3>
                    <h4>Junior Fullstack Developer</h4>
                    <p>
                      I'm a fullstack developer with hands-on building web from
                      the ground up. My strengths lie within React and its
                      ecosystem such as Redux. I'm familiar with React design
                      patterns, best practices, newer features, and how to
                      implement them in real-life situations. I've also had
                      backend practices building RESTful APIs following a
                      microservice architecture with Node.js, MongoDB, and
                      Express.
                    </p>
                    <ul className="list basic_info">
                      <li>
                        <a href="#">
                          <i className="lnr lnr-calendar-full"></i> 11st
                          September, 1997
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lnr lnr-phone-handset"></i> +977
                          9842541940
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lnr lnr-envelope"></i>{' '}
                          xthazudp@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lnr lnr-home"></i> Itahari-1, Sunsari
                        </a>
                      </li>
                    </ul>
                    <ul className="list personal_social">
                      <li>
                        <a href="https://www.facebook.com/sudip.shrestha.921">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/sudipstha999">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Home Banner Area =================--> */}

      {/* <!--================Welcome Area =================--> */}
      <WelcomeArea />
      {/* <!--================End Welcome Area =================--> */}

      {/* <!--================My Tabs Area =================--> */}
      <section className="mytabs_area p_120">
        <div className="container">
          <div className="tabs_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  My Experiences
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  My Education
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <ul className="list">
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>Company Name</h4>
                        <p>
                          Senior Web Developer <br />
                          Santa monica, Los angeles
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>Company Name</h4>
                        <p>
                          Senior Web Developer <br />
                          Santa monica, Los angeles
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>Company Name</h4>
                        <p>
                          Senior Web Developer <br />
                          Santa monica, Los angeles
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ul className="list">
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>IOE Purwanchal Campus</h4>
                        <p>
                          BE Computer
                          <br />
                          Tinkune, Dharan
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>Vishwa Aadarsha College</h4>
                        <p>
                          +2 Science
                          <br />
                          Itahari-1, Sunsari
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex">
                        <p>March 2017 to present</p>
                      </div>
                      <div className="media-body">
                        <h4>Peace Zone School</h4>
                        <p>
                          SLC <br />
                          Itahari-1, Sunsari
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End My Tabs Area =================--> */}

      {/* <!--================Feature Area =================--> */}
      <Features />
      {/* <!--================End Feature Area =================--> */}

      {/* <!--================Home Gallery Area =================--> */}
      <section className="home_gallery_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Our Latest Featured Projects</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="isotope_fillter">
            <ul className="gallery_filter list">
              <li className="active" data-filter="*">
                <a href="#">All</a>
              </li>
              <li data-filter=".brand">
                <a href="#">Vector</a>
              </li>
              <li data-filter=".manipul">
                <a href="#">Raster</a>
              </li>
              <li data-filter=".creative">
                <a href="#">UI/UX</a>
              </li>
              <li data-filter=".design">
                <a href="#">Printing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="gallery_f_inner row imageGallery1">
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-1.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-1.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>3D Helmet Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-2.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-2.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>2D Vinyl Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-3.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-3.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>Creative Poster Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-4.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-4.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>Embosed Logo Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-5.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-5.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>3D Disposable Bottle</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img
                    className="img-fluid"
                    src="img/gallery/project-6.jpg"
                    alt=""
                  />
                  <a className="light" href="img/gallery/project-6.jpg">
                    <img src="img/gallery/icon.png" alt="" />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>3D Logo Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="more_btn">
            <a className="main_btn" href="#">
              Load More Items
            </a>
          </div>
        </div>
      </section>
      {/* <!--================End Home Gallery Area =================--> */}

      <Testimonial />
    </>
  );
};

export default Home;
