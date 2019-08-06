import React from 'react';
import '../scss/custom.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { selectImage } from '../actions';
import ScrollToTop from './ScrollToTop';

import Navigation from './Navigation';
import About from './About';
import Portfolio from '../pages/Portfolio';
import HomePage from '../pages/HomePage';
import GraphicDesign from '../pages/GraphicDesign';
import HandDone from '../pages/HandDone';

const App = () => {
  return (
    <div>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>

        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/graphic-design" exact component={GraphicDesign} />
        <Route path="/portfolio/hand-done" exact component={HandDone} />
        <Navigation />

      </BrowserRouter>
    </div>
  );
}

export default App;
