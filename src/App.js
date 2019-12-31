import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage.js';
import ShopItemsContainer from './components/ShopItemsContainer.js';
import ItemContainer from './components/ItemContainer.js';
import Contact from './components/Contact.js';
import NoMatch from './components/NoMatch.js';

import data from './data.json';

class App extends React.Component {
    render() {
        JSON.parse(JSON.stringify(data));
        return (
            <Router>
                <MainPage>
                    <Switch>
                        <Route exact path="/" render={() => <ShopItemsContainer category='' data={data} />} />
                        <Route path="/meska" render={() => <ShopItemsContainer category='male' data={data} />} />
                        <Route path="/damska" render={() => <ShopItemsContainer category='female' data={data} />} />
                        <Route path="/akcesoria" render={() => <ShopItemsContainer category='others' data={data} />} />
                        <Route path="/kontakt" component={Contact} />
                        <Route path="/id:id" render={(routeProps) => <ItemContainer {...routeProps} data={data} />} />
                        <Route exact path='*' component={NoMatch} />
                    </Switch>
                </MainPage>
            </Router>
        )
    }
}

export default App;