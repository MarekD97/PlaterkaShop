import React from 'react';
import HeaderContainer from './HeaderContainer.js';
import Footer from './Footer.js';

class MainPage extends React.Component {
    render() {
        const styles = {
            container: {
                position: 'relative',
                minHeight: '100vh'
            },
            content: {
                paddingBottom: '3rem'
            }

        }
        return (
            <div style={styles.container}>
                <HeaderContainer />
                <div style={styles.content}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
};

export default MainPage;