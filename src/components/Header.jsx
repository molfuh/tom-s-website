import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                    {/* <Home>Home</Home> */}
                    {/* <About>About</About> */}
                    {/* <Videos>Videos</Videos> */}
                    {/* <Listen>Take A Listen</Listen> */}
            </Router>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    /* background-color: transparent; */
    /* vertical-align: middle; */
    /* display: flex;
    align-items: center; */
    background-color: white;
    z-index: 1;
    width: 100vw;
`;

const Logo = styled.span`
    /* position: absolute; */
    left: 20px;
`;

const LinksContainer = styled.span`
    /* position: relative; */
    /* display: flex; */
    display: grid;
    /* justify-content: flex-end; */
    width: 30vw;
    grid-template-columns: repeat(4, 1fr);
    .home {
        /* float: right; */
    }
    .about {
        /* grid-column-start: 2; */
    }
    .videos {

    }
    .listen {
    }
`;

// const Home = styled.button`
// grid-column-start: 1;
// background-color: transparent;
// border-radius: 10px;
// outline: none;
// margin: 10px;
// border: none;
// &:hover {
//     background-color: orange;
// }
// `;

// const About = styled(Home)`
//     grid-column-start: 2;
// `;

// const Videos = styled(Home)`
//     grid-column-start: 3;
// `;

// const Listen = styled(Home)`
//     grid-column-start: 4;
// `;