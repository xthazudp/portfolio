import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './AppRouting';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <AppRouting />
      </BrowserRouter>
    </div>
  );
};

export default App;
