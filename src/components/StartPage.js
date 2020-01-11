import React from 'react';

const styles = {
    header: {
        textAlign: 'center',
        padding: window.innerWidth < 576 ? '0' : '0 10%',
        width: '100%'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        height: '80vh'
    }
}

const StartPage = () => {
    return (
        <div style={styles.container} >
            <h1 style={styles.header}>Witamy na oficjalnej stronie sklepu II LO im. Emilii Plater w Białej Podlaskiej. Zapraszamy do zapoznania się z naszą aktualną ofertą</h1>
        </div >);
};

export default StartPage;