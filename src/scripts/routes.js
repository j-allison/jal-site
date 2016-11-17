import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={Home}/>
    {/*<Route path="about" component={About}/>
    <Route path="portfolio" component={Portfolio}/>
    <Route path="contact" component={Contact}/>*/}
  </Route>
);

export default routes;