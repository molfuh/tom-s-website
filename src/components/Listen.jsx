import React, { useState } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import ReactAudioPlayer from 'react-audio-player';

export default function Listen() {
  const [button1, clickButton1] = useState(false)
  const [button2, clickButton2] = useState(false)
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
              <>
              <button onClick={() => {
                clickButton1(!button1)
                if (button2) clickButton2(!button2)
              }}>
                <span>Music Composition</span>
                </button>
              </>
            </Tilt>
          </StyledLeft>
          <StyledRight>
          <Tilt className="Tilt" options={{ max : 25 }} >
              <button onClick={() => {
                clickButton2(!button2);
                if (button1) clickButton1(!button1)
                }}>
                  <span>Music Production</span>
                  </button>
            </Tilt>
          </StyledRight>
        </div>
      </Container>
      <Composition button1={button1}>
        <div>Composition Works:</div>
        <StyledAudio controls="controls" src="media/birds.mp3">
          Your browser does not support the HTML5 Audio element.
        </StyledAudio>
        {/* <ReactAudioPlayer
          src="my_audio_file.ogg"
          autoPlay
          controls
        > */}
          {/* Your browser does not support the HTML5 Audio element. */}
      {/* </ReactAudioPlayer> */}
      </Composition>
      <Production button2={button2}>
        <div>Production Works:</div>
      </Production>
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
  margin: 5vw;
  button {
    /* position: absolute; */
    border-radius: 10px;
    background-color: red;
    padding: 20px;
    height: 20vw;
    width: 20vw;
    font-family: 'Montserrat', sans-serif;
    font-size: 2vw;
    border-color: transparent;
    text-align: center;
    span {
    }
  }
`;

const StyledRight = styled(StyledLeft)`
  grid-column-start: 2;
  button {
    background-color: yellow;
  }
`;

const Composition = styled.div`
  position: absolute;
  opacity: ${ props => props.button1 ? 1 : 0 };
  /* visibility: ${ props => props.button1 ? 'visible' : 'hidden' }; */
  transition: opacity 1s;
  z-index: 1;
  /* background-color: white; */
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2rem;
`;

const StyledAudio = styled.audio`
  /* &::-webkit-media-controls-enclosure {
    border-radius: 0;
    background-color: grey;
  } */
  filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
`;

const Production = styled(Composition)`
  /* visibility: ${ props => props.button2 ? 'visible' : 'hidden' }; */
  /* transition: opacity 1s; */
`;