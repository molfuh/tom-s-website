import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import VizSensor from 'react-visibility-sensor';
import "../styles/app.scss";

export default function FirstView({ coverPic }) {
    const [divVis, setDivVis] = useState(false);
    return (
        <>
            <FirstViewDiv coverPic={coverPic}>
                <VizSensor
                    onChange={(isVisible) => {
                        setDivVis(isVisible);
                    }}>
                    <StyledDiv divVis={divVis}>
                        <p>
                            Composer, Producer, Performer<br />
                            THOMAS M.L. RAVAGO
                        </p>
                    </StyledDiv>
                </VizSensor>
            </FirstViewDiv>
        </>
    )
}

const FirstViewDiv = styled.div`
    background-image: url(${ ({coverPic}) => coverPic });
    background-size: cover;
    height: 100vh;
    width: 100vw;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
`;

const visible = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const StyledDiv = styled.div`
  opacity: 0;
  font-size: 1.4rem;
  text-align: center;
  color: white;
  padding: 20px;
  display: flex;
  align-items:center;
  justify-content:center;
  line-height: 5vh;
  background-color: rgba(0, 0, 0, 0.8);
  height: 80vh;
  width: 25vw;
  margin-left: 100px;
  margin-top: 50px;
  animation: ${props => props.divVis ? css`${visible} 1s forwards` : '' };
`;