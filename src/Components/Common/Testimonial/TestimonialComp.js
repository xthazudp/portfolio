import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Testimonial = () => {
  return (
    <div>
      <section className="testimonials_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Testimonials</h2>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
          </div>
          <div className="testi_inner">
            <div className="testi_slider owl-carousel">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="testi_item">
                      <p>
                        As conscious traveling Paup ers we must always be
                        oncerned about our dear Mother Earth. If you think about
                        it, you travel across her face
                      </p>
                      <h4>Sulav Tuladhar</h4>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="testi_item">
                      <p>
                        As conscious traveling Paup ers we must always be
                        oncerned about our dear Mother Earth. If you think about
                        it, you travel across her face
                      </p>
                      <h4>Pramesh Maharjan</h4>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="testi_item">
                      <p>
                        As conscious traveling Paup ers we must always be
                        oncerned about our dear Mother Earth. If you think about
                        it, you travel across her face
                      </p>
                      <h4>Bibek Adhikari</h4>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="testi_item">
                      <p>
                        As conscious traveling Paup ers we must always be
                        oncerned about our dear Mother Earth. If you think about
                        it, you travel across her face
                      </p>
                      <h4>Kunal Gautam</h4>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="testi_item">
                      <p>
                        As conscious traveling Paup ers we must always be
                        oncerned about our dear Mother Earth. If you think about
                        it, you travel across her face
                      </p>
                      <h4>Sudip Shrestha</h4>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
