import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from '../Common/InfoBox/InfoboxComp';
import Testimonial from '../Common/Testimonial/TestimonialComp';
import WelcomeArea from '../Common/WelcomeArea/WelcomeAreaComp';

const About = () => {
  return (
    <>
      <section class="banner_area">
        <div class="box_1620">
          <div class="banner_inner d-flex align-items-center">
            <div class="container">
              <div class="banner_content text-center">
                <h2>About Us</h2>
                <div class="page_link">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoBox />

      <WelcomeArea />

      <Testimonial />
    </>
  );
};

export default About;
