import React from 'react';

const InfoComp = () => {
  return (
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
                        <i className="lnr lnr-envelope"></i> xthazudp@gmail.com
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
                      <a href="https://www.linkedin.com/in/sudipshrestha1/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/xthazudp">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://gitlab.com/xthazudp">
                        <i className="fa fa-gitlab"></i>
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
  );
};

export default InfoComp;
