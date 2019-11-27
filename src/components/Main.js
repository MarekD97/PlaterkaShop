import React from 'react';
import MenuBar from './MenuBar.js';
import Footer from './Footer.js';

class Main extends React.Component {
    render() {
        return (
            <>
                <MenuBar />
                {this.props.children}
                <Footer />
            </>
        );
    }
};

export default Main;