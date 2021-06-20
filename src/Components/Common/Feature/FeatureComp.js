import React from 'react';

const Features = () => {
  return (
    <>
      <section className='feature_area white_feature p_120'>
        <div className='container'>
          <div className='main_title'>
            <h2>offerings to my clients</h2>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
          </div>
          <div className='feature_inner row'>
            <div className='col-lg-4 col-md-6'>
              <div className='feature_item'>
                <i className='fas fa-laptop-code'></i>
                <h4>Web Development</h4>
                <p>A beautiful and smooth websites are developed using MERN.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='feature_item'>
                <i className='fas fa-paper-plane'></i>
                <h4>Website Deployment</h4>
                <p>Website deployment are done here.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='feature_item'>
                <i className='flaticon-sketch'></i>
                <h4>Graphic Design</h4>
                <p>Beautiful design are build using adobe photoshop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
