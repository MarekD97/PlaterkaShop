import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style.min.css';

import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
