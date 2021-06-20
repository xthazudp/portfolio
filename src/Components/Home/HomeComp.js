import React from 'react';
import Features from '../Common/Feature/FeatureComp';
import Testimonial from '../Common/Testimonial/TestimonialComp';
import WelcomeArea from '../Common/WelcomeArea/WelcomeAreaComp';

import GalleryComp from '../Common/Gallery/GalleryComp';
import ProfileTabComp from './ProfileTab/ProfileTabComp';
import InfoComp from './InfoComp/InfoComp';

const Home = () => {
  return (
    <>
      <InfoComp />

      <WelcomeArea />

      <ProfileTabComp />

      <Features />

      <GalleryComp />

      <Testimonial />
    </>
  );
};

export default Home;
