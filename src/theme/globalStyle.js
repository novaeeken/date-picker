import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700');

  @font-face {
    font-family: 'icomoon';
    src:  url('${ process.env.PUBLIC_URL }/fonts/icomoon.eot?s94rq');
    src:  url('${ process.env.PUBLIC_URL }/fonts/icomoon.eot?s94rq#iefix') format('embedded-opentype'),
          url('${ process.env.PUBLIC_URL }/fonts/icomoon.ttf?s94rq') format('truetype'),
          url('${ process.env.PUBLIC_URL }/fonts/icomoon.woff?s94rq') format('woff'),
          url('${ process.env.PUBLIC_URL }/fonts/icomoon.svg?s94rq#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  html,
  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: #646C9A;
    font-weight: 300;
    line-height: 1.5;
  }

`
