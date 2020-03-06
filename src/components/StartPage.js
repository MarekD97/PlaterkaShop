import React from 'react';
import styled from 'styled-components';

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
    opacity: 0;
    @media only screen and (min-width: 576px) {
        height: 60%;
    }
    @keyframes slideInFromLeft {
        0% {
          transform: translateX(-40%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
    }
    animation: 1s ease-out 0s 1 slideInFromLeft;
    animation-fill-mode: forwards;
`;

const H1 = styled.h1`
    text-align: center;
    width: 100%;
    opacity: 0;
    @keyframes slideInFromBottom {
        0% {
          opacity: 0;
          transform: translateY(60%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
    }
    animation: 1s ease-out .3s 1 slideInFromBottom;
    animation-delay: .4s;
    animation-fill-mode: forwards;
`;

function StartPage() {
    return (
        <Container>
            <Image id="mainLogo" src={'./images/platerkapodstawa2 (2).png'} alt='logo Platerki' />
            <H1>Witamy na oficjalnej stronie sklepu II LO im. Emilii Plater w Białej Podlaskiej. Zapraszamy do zapoznania się z naszą aktualną ofertą</H1>
        </Container>
    );
};

export default StartPage;