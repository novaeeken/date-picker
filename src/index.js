import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyle'
import { Theme } from './theme'
import { ThemeProvider } from 'styled-components'
import moment from 'moment'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={ Theme }>
      <App />
    </ThemeProvider>
  </Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
