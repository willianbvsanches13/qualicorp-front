import { createGlobalStyle } from 'styled-components';

import 'antd/dist/antd.css';

export const maxWidth = '1280px';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: transparent;
    font-family: 'Roboto' sans-serif;
  }
  input, button {
    font-family: 'Roboto' sans-serif;
  }
  button {
    cursor: pointer;
  }
  .ant-upload.ant-upload-select{
    width: 100%;
  }

  .lightbox {
      > button[aria-label="Ocultar"]{
        display: none;
      }
  }

  .ant-slider{
    margin-left: 0;
  }
`;
