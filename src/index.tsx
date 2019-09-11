import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { RendererProvider as FelaProvider } from 'react-fela';

import { renderer } from './config/Fela';

import Layout from './components/layout';
import * as serviceWorker from './serviceWorker';

import 'reset-css';

import './index.css';

ReactDOM.render(
  <CookiesProvider>
    <FelaProvider renderer={renderer}>
      <Layout />
    </FelaProvider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
