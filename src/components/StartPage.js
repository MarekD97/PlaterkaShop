import React from 'react';
import styled from 'styled-components';

const styles = {
    header: {
        textAlign: 'center',
        width: '100%'
    }
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
    height: 80vh;
    padding: 1em;
    font-size: 0.7em;
    @media only screen and (min-width: 576px) {
        padding: 1em 4em;
        font-size: 1.1em;
    }
`;
const Image = styled.img`
    width: auto;
    height: 40%;
    object-fit: contain;
    @media only screen and (min-width: 576px) {
        height: 60%;
    }
`;

const StartPage = () => {
    return (
        <Container>
            <Image src={'./images/platerkapodstawa2 (2).png'} alt='logo Platerki' />
            <h1 style={styles.header}>Witamy na oficjalnej stronie sklepu II LO im. Emilii Plater w Białej Podlaskiej. Zapraszamy do zapoznania się z naszą aktualną ofertą</h1>
        </Container>
    );
};

export default StartPage;