import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import i18n from './i18n';
import routes from './routes';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('#application')
);