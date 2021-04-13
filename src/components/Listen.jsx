import React, { useState } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import ReactAudioPlayer from 'react-audio-player';
import music from '../sheet_music.jpeg';
import production from '../music_production.JPG';
import { TextFocus } from 'react-text-effects';

export default function Listen({ music }) {
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
              <button music={music} onClick={() => {
                clickButton1(!button1)
                if (button2) clickButton2(!button2)
              }}>
              <TextFocus type='in' duration='1s'>
                <span>Music Composition</span>
              </TextFocus>
                </button>
              </>
            </Tilt>
          </StyledLeft>
          <StyledRight>
          <Tilt className="Tilt" options={{ max : 25 }} >
              <button production={production} onClick={() => {
                clickButton2(!button2);
                if (button1) clickButton1(!button1)
              }}>
              <TextFocus type='in' duration='2s'>
                <span>Music Production</span>
              </TextFocus>
                </button>
            </Tilt>
          </StyledRight>
        </div>
      </Container>
      <Recordings>
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
          <StyledAudio controls="controls" src="media/birds.mp3">
            Your browser does not support the HTML5 Audio element.
          </StyledAudio>
        </Production>
      </Recordings>
      <Footer />
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
    color: black;
    font-weight: bold;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    background-image: url(${music});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    /* position: absolute; */
    border-radius: 25px;
    /* background-color: red; */
    /* opacity: 0.5; */
    padding: 20px;
    height: 30vw;
    width: 30vw;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5vw;
    border-color: transparent;
    text-align: center;
  }
`;

const StyledRight = styled(StyledLeft)`
  grid-column-start: 2;
  button {
    background-image: url(${production});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
`;

{/* const BackgroundImage = styled.div`
  background-image: url(${props => props.music})
`; */}

const Recordings = styled.div`
  position: relative;
  height: 120px;
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
  /* filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%); */
`;

const Production = styled(Composition)`
  /* visibility: ${ props => props.button2 ? 'visible' : 'hidden' }; */
  /* transition: opacity 1s; */
  opacity: ${ props => props.button2 ? 1 : 0 };
`;