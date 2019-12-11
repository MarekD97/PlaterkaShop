import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage.js';
import ShopItemsContainer from './components/ShopItemsContainer.js';
import ItemContainer from './components/ItemContainer.js';
import Contact from './components/Contact.js';
import NoMatch from './components/NoMatch.js';

class App extends React.Component {
    render() {
        return (
            <Router>
                <MainPage>
                    <Switch>
                        <Route exact path="/" component={ShopItemsContainer} />
                        <Route path="/meska" component={ShopItemsContainer} />
                        <Route path="/damska" component={ShopItemsContainer} />
                        <Route path="/kontakt" component={Contact} />
                        <Route path="/id:id" component={ItemContainer} />
                        <Route exact path='*' component={NoMatch} />
                    </Switch>
                </MainPage>
            </Router>
        )
    }
}

export default App;