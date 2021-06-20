import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './About/AboutComp';
import Footer from './Common/Footer/FooterComp';
import Header from './Common/Header/HeaderComp';
import ScrollToTopComp from './Common/ScrollTop/ScrollToTopComp';

import Contact from './Contact/ContactComp';
import Home from './Home/HomeComp';
import Portfolio from './Portfolio/PortfolioComp';
import Services from './Services/ServiceComp';

const AppRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTopComp />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouting;
