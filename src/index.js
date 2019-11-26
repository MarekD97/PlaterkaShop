import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import MenuBar from './components/MenuBar.js';
import Footer from './components/Footer.js';
import List from './components/List.js';
import SocialMedia from './components/SocialMedia.js';
import Contact from './components/Contact.js';

ReactDOM.render(
    <Router>
        <MenuBar />
        <Route exact path="/" component={List} />
        <Route path="/contact" component={Contact} />
        <Route path="/others" component={Contact} />
        <Footer />
        <SocialMedia />
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
