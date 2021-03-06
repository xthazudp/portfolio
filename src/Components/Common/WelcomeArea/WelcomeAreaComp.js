import React, { useState } from 'react';
import CountUp from 'react-countup';
import ProgressBar from '../Progressbar/ProgressBarComp';

const WelcomeArea = () => {
  return (
    <section className="welcome_area p_120">
      <div className="container">
        <div className="row welcome_inner">
          <div className="col-lg-6">
            <div className="welcome_text">
              <h4>About Myself</h4>
              <p>
                I'm a fullstack developer with hands-on building web from the
                ground up. I'm familiar with React-Redux design patterns, best
                practices, newer features, and how to implement them in
                real-life situations. I've also had backend practices building
                RESTful APIs following a microservice architecture with Node.js,
                MongoDB, and Express.
              </p>
              <div className="row">
                {/* <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-database"></i>
                    <h4>
                      <CountUp end={2.5} decimals={2} prefix="$ " suffix=" M" />
                    </h4>
                    <p>Total Donation</p>
                  </div>
                </div> */}
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-book"></i>
                    <h4>
                      <CountUp end={12} />
                    </h4>
                    <p>Total Projects</p>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-users"></i>
                    <h4>
                      <CountUp end={3965} />
                    </h4>
                    <p>Total Volunteers</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tools_expert">
              <div className="skill_main">
                <div className="skill_item">
                  <h4>
                    JavaScript {''}
                    <span className="counter">
                      <CountUp end={85} suffix="%" />
                    </span>
                  </h4>

                  <ProgressBar done="85" />
                </div>
                <div className="skill_item">
                  <h4>
                    C{' '}
                    <span className="counter">
                      <CountUp end={80} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="90" />
                </div>
                <div className="skill_item">
                  <h4>
                    C++{' '}
                    <span className="counter">
                      <CountUp end={70} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="70" />
                </div>
                <div className="skill_item">
                  <h4>
                    HTML/CSS{' '}
                    <span className="counter">
                      <CountUp end={75} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="75" />
                </div>
                <div className="skill_item">
                  <h4>
                    React{' '}
                    <span className="counter">
                      <CountUp end={70} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="70" />
                </div>
                <div className="skill_item">
                  <h4>
                    MEN{' '}
                    <span className="counter">
                      <CountUp end={70} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="70" />
                </div>
                <div className="skill_item">
                  <h4>
                    Photoshop{' '}
                    <span className="counter">
                      <CountUp end={80} suffix="%" />
                    </span>
                  </h4>
                  <ProgressBar done="80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
