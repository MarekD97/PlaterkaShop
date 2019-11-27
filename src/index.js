import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Main from './components/Main.js';
import List from './components/List.js';
import Contact from './components/Contact.js';

ReactDOM.render(
    <Router>
        <Main>
            <Route exact path="/" component={List} />
            <Route path="/contact" component={Contact} />
        </Main>
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
