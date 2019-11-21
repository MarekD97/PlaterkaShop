import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { ContactPage, OthersPage } from './App';
import MenuBar from './components/MenuBar.js';
import Footer from './components/Footer.js';
import List from './components/List.js';
import SocialMedia from './components/SocialMedia.js';

ReactDOM.render(
    <Router>
        <MenuBar />
        <Route exact path="/" component={List} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/others" component={OthersPage} />
        <Footer />
        <SocialMedia />
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
