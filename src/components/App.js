import React from 'react';
import '../scss/custom.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import { selectImage } from '../actions';
//import ScrollToTop from './ScrollToTop';

import Navigation from './Navigation';
//import About from './About';
import Portfolio from '../pages/Portfolio';
import HomePage from '../pages/HomePage';
import GraphicDesign from '../pages/GraphicDesign';
import HandDone from '../pages/HandDone';
import Technica from '../pages/Technica';
import Videos from '../pages/Videos';
import PolymerClay from '../pages/PolymerClay';

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} history = {history}>
   
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/graphic-design" exact component={GraphicDesign} />
        <Route path="/portfolio/hand-done" exact component={HandDone} />
        <Route path="/portfolio/technica" exact component={Technica} />
        <Route path="/portfolio/videos" exact component={Videos} />
        <Route path="/portfolio/polymer-clay" exact component={PolymerClay} />
    
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
