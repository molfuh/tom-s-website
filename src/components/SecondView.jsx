import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import VizSensor from 'react-visibility-sensor';
// import ReactSnapScroll from 'react-snap-scroll';

export default function SecondView() {
    const [divVis, setDivVis] = useState(false);
    return (
        <>
            <SecondViewDiv>
                <VizSensor
                    onChange={(isVisible) => {
                        setDivVis(isVisible);
                    }}>
                    <StyledDiv divVis={divVis} >
                    Composer, Producer, Performer
                    <br />
                    THOMAS M.L. RAVAGO
                    {/* Passionate and self-motivated musician,
                    teacher, composer, producer, and performer,
                    with a philosophy that has a huge emphasis on the power
                    and importance of collaboration. Diligent and hard-working
                    individual that strives to bring audiences a well-rounded
                    musical experience, to promote positivity and camaraderie
                    in collaborative work environments, and to continue learning
                    and passing on all there is to learn as a once-and-always
                    student of music. */}
                    </StyledDiv>
                </VizSensor>
            </SecondViewDiv>
        </>
    )
}

const SecondViewDiv = styled.div`
    /* position: absolute; */
    background-color: red;
    /* top: 100vh; */
    height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const visible = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const StyledDiv = styled.div`
    opacity: 0;
    /* position: absolute; */
    text-align: center;
    color: white;
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 80vh;
    width: 25vw;
    /* right: 100px; */
    /* top: 100px; */
    margin-right: 100px;
    animation: ${props => props.divVis ? css`${visible} 1s forwards` : '' };
    float: right;
`;