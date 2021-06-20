import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Common/Feature/FeatureComp';

import Testimonial from '../Common/Testimonial/TestimonialComp';

const Services = () => {
  return (
    <>
      {/* <!--================Home Banner Area =================--> */}
      <section className="banner_area">
        <div className="box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-center">
                <h2>Services</h2>
                <div className="page_link">
                  <Link to="/">Home</Link>
                  <Link to="/services">Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Home Banner Area =================--> */}
      <Features />

      <Testimonial />
    </>
  );
};

export default Services;
