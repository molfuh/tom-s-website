import React from 'react';
import styled from 'styled-components';
import { TextFocus } from 'react-text-effects';
import Footer from './Footer';

export default function Videos({ eric_genaff }) {
  return (
    <>
    <Container>
        <StyledImage src={eric_genaff}/>
        <Styledh1>
          <TextFocus type='in' duration='1s'>
            Videos
          </TextFocus>
        </Styledh1>
        <h2>
          Storybook Symphony: The Concert
        </h2>
        </Container>
        <Footer />
    </>
  )
}

const Container = styled.div`
  position: relative;
  /* text-align: center; */
`;

const StyledImage = styled.img`
  /* position: absolute; */
  display: block;
  width: 55%;
  margin: 0 auto;
`;

const Styledh1 = styled.h1`

  position: absolute;
  color: white;
  font-size: 6em;
  top: 15vw;
  left: 25vw;
`;