import React from 'react';
import { Link } from 'react-router-dom';

const InfoBox = () => {
  return (
    <>
      <section class="profile_area">
        <div class="container">
          <div class="profile_inner p_120">
            <div class="row">
              <div class="col-lg-5">
                <img class="img-fluid" src="img/personal-2.jpg" alt="" />
              </div>
              <div class="col-lg-7">
                <div class="personal_text">
                  <h6>Hello Everybody, i am</h6>
                  <h3>Sudip Shrestha</h3>
                  <h4>Junior FullStack Developer</h4>
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
                  <ul class="list basic_info">
                    <li>
                      <a href="#">
                        <i class="lnr lnr-calendar-full"></i> 11st September,
                        1997
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lnr lnr-phone-handset"></i> +977 9842541940
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lnr lnr-envelope"></i> xthazudp@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lnr lnr-home"></i> Itahari-1, Sunsari
                      </a>
                    </li>
                  </ul>
                  <ul class="list personal_social">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoBox;
