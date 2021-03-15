import React from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import Tilt from 'react-tilt';

export default function Listen() {
  return (
    <>
    {/* container */}
      <Container>
        {/* title */}
        <h2>Works</h2>
        {/* container for both the buttons */}
        <div>
          <StyledLeft>
            <Tilt className="Tilt" options={{ max : 25 }} >
              {/* <div className="Tilt-inner"> 👽 </div> */}
              <button>Music Composition</button>
            </Tilt>
          </StyledLeft>
          <StyledRight>
          <Tilt className="Tilt" options={{ max : 25 }} >
              {/* <div className="Tilt-inner"> 👽 </div> */}
              <button>Music Production</button>
            </Tilt>
          </StyledRight>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding-top: 100px;
  text-align: center;
  h2 {
    margin: 0;
  }
  div {
    display: grid;
    grid-template-columns: 2;
    justify-content: center;
    align-content: center;
  }
`;

const StyledLeft = styled.div`
  grid-column-start: 1;
  margin: 10vw;
  button {
    background-color: red;
    padding: 20px;
    height: 20vw;
    width: 20vw;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    border-color: transparent;
  }
`;

const StyledRight = styled(StyledLeft)`
  grid-column-start: 2;
  button {
    background-color: yellow;
  }
`;