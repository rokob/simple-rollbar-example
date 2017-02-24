import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

var rollbarConfig = {
  accessToken: "12c99de67a444c229fca100e0967486f",
  ignoredMessages: ["Can't find Clippy.bmp. The end is nigh."],
  captureUncaught: true,
  captureUnhandledRejections: false,
  payload: {
    environment: "production"
  }
};

var Rollbar = require('rollbar-browser').init(rollbarConfig);

ReactDOM.render(<App />, document.getElementById('root'));
