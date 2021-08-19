import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import './i18n/i18n';

import './index.css';

import "bootstrap/dist/css/bootstrap.css";

axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'en';

ReactDOM.render(
  <React.StrictMode>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <App />
    {/* </Suspense> */}
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
