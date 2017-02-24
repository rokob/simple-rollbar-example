import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

var rollbarConfig = {
  accessToken: "POST_CLIENT_ACCESS_TOKEN",
  ignoredMessages: ["Can't find Clippy.bmp. The end is nigh."],
  captureUncaught: true,
  captureUnhandledRejections: false,
  payload: {
    environment: "production"
  }
};

var Rollbar = require('rollbar-browser').init(rollbarConfig);

ReactDOM.render(<App />, document.getElementById('root'));
