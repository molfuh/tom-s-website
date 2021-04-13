import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Header () {
    return (
        <Container>
            <Logo>THOMAS M.L. RAVAGO</Logo>
            <LinksContainer>
            <Router>
                <Link to="/" className={'home'}>Home</Link>
                <Link to="/about" className={'about'}>About</Link>
                <Link to="/videos" className={'videos'}>Videos</Link>
                <Link to="/listen" className={'listen'}>Take a Listen</Link>
            </Router>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    z-index: 1;
    width: 100vw;
`;

const Logo = styled.span`
    left: 20px;
`;

const LinksContainer = styled.span`
    display: grid;
    width: 30vw;
    grid-template-columns: repeat(4, 1fr);
`;