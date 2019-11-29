import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Main from './components/Main.js';
import List from './components/List.js';
import Item from './components/Item.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';

ReactDOM.render(
    <Router>
        <Main>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/male" component={List} />
                <Route path="/female" component={List} />
                <Route path="/contact" component={Contact} />
                <Route path="/product/:value" component={Item} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        </Main>
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
