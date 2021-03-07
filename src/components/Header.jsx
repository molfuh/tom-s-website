import React from 'react';
import styled from 'styled-components';

export default function Header () {
    return (
        <Container>
            <Logo>THOMAS M.L. RAVAGO</Logo>
            <LinksContainer>
                <Home>Home</Home>
                <About>About</About>
                <Videos>Videos</Videos>
                <Listen>Take A Listen</Listen>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: red;
    height: 5vh;
    position: absolute;
`;

const Logo = styled.span`
    position: absolute;
    left: 0;
`;

const LinksContainer = styled.span`
    position: absolute;
    display: grid;
    width: 30vw;
    right: 0;
    grid-template-columns: repeat(4, 1fr);
`;

const Home = styled.span`
    position: absolute;
    grid-column-start: 1;
`;

const About = styled(Home)`
    grid-column-start: 2;
`;

const Videos = styled(Home)`
    grid-column-start: 3;
`;

const Listen = styled(Home)`
    grid-column-start: 4;
`;