import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About/AboutComp';
import Footer from './Common/Footer/FooterComp';
import Header from './Common/Header/HeaderComp';
import Contact from './Contact/ContactComp';
import Home from './Home/HomeComp';
import Services from './Services/ServiceComp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
