import React, { useState } from 'react';
import CountUp from 'react-countup';
import ProgressBar from '../Progressbar/ProgressBarComp';

const WelcomeArea = () => {
  return (
    <div>
      {/* <Progress done="90" /> */}
      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>About Myself</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-database"></i>
                      <h4>
                        <CountUp
                          end={2.5}
                          decimals={2}
                          prefix="$ "
                          suffix=" M"
                        />
                      </h4>
                      <p>Total Donation</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-book"></i>
                      <h4>
                        <CountUp end={1465} />
                      </h4>
                      <p>Total Projects</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-users"></i>
                      <h4>
                        <CountUp end={3965} />
                      </h4>
                      <p>Total Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tools_expert">
                <div className="skill_main">
                  <div className="skill_item">
                    <h4>
                      After Effects {''}
                      <span className="counter">
                        <CountUp end={85} suffix="%" />
                      </span>
                    </h4>

                    <ProgressBar done="85" />
                  </div>
                  <div className="skill_item">
                    <h4>
                      Photoshop{' '}
                      <span className="counter">
                        <CountUp end={90} suffix="%" />
                      </span>
                    </h4>
                    <ProgressBar done="90" />
                  </div>
                  <div className="skill_item">
                    <h4>
                      Illustrator{' '}
                      <span className="counter">
                        <CountUp end={70} suffix="%" />
                      </span>
                    </h4>
                    <ProgressBar done="70" />
                  </div>
                  <div className="skill_item">
                    <h4>
                      Sublime{' '}
                      <span className="counter">
                        <CountUp end={95} suffix="%" />
                      </span>
                    </h4>
                    <ProgressBar done="95" />
                  </div>
                  <div className="skill_item">
                    <h4>
                      Sketch{' '}
                      <span className="counter">
                        <CountUp end={75} suffix="%" />
                      </span>
                    </h4>
                    <ProgressBar done="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeArea;
