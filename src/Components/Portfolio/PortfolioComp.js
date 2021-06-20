import React from 'react';
import { Link } from 'react-router-dom';
import GalleryComp from '../Common/Gallery/GalleryComp';
const Portfolio = () => {
  return (
    <div>
      {/* <!--================Home Banner Area =================--> */}
      <section className="banner_area">
        <div className="box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-center">
                <h2>PortFolio</h2>
                <div className="page_link">
                  <Link to="/">Home</Link>
                  <Link to="/portfolio">Portfolio</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Home Banner Area =================--> */}
      <GalleryComp />
    </div>
  );
};

export default Portfolio;
