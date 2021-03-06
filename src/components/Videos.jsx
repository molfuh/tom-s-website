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
        <VideoContainer>
          <h2>
            Storybook Symphony: The Concert
          </h2>
          <iframe width="1000" title="storybook" height="530" src="https://www.youtube.com/embed/AQAb1VgFkdo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2>Descent into Madness</h2>
          <iframe width="1000" title="descent" height="530" src="https://www.youtube.com/embed/hta8tqKB0nc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2>Student Profile: Thomas Ravago</h2>
          <iframe width="1000" title="profile" height="530" src="https://www.youtube.com/embed/dDvrc0NZLQU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoContainer>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  padding-top: 50px;
`;

const StyledImage = styled.img`
  display: block;
  width: 55%;
  margin: 0 auto;
  overflow: none;
`;

const Styledh1 = styled.h1`
  position: absolute;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 6em;
  top: 25vw;
  left: 25vw;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`;