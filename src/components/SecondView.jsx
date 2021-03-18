import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import VizSensor from 'react-visibility-sensor';
// import ReactSnapScroll from 'react-snap-scroll';
import "../styles/app.scss";

// export default function SecondView({ thomasHeadshot }) {
export default function SecondView({ tom_s_logo }) {
    const [divVis, setDivVis] = useState(false);
    return (
        <>
            <SecondViewDiv>
            <StyledImage src={tom_s_logo} />
                <VizSensor
                    onChange={(isVisible) => {
                        setDivVis(isVisible);
                    }}>
                    <StyledDiv divVis={divVis} >
                        {/* <p>Summary</p> */}
                      <p><span className="summary">SUMMARY</span> <br /> Passionate and self-motivated musician, teacher, composer, producer, and performer, with a philosophy that has a huge emphasis on the power and importance of collaboration. Diligent and hard-working individual that strives to bring audiences a well-rounded musical experience, to promote positivity and camaraderie in collaborative work environments, and to continue learning and passing on all there is to learn as a once-and-always student of music.</p>
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
    /* position: relative; */
    /* background-color: #9da39f; */
    background-color: black;
    /* top: 100vh; */
    height: 100vh;
    width: 100vw;
    /* scroll-snap-align: end; */
    scroll-snap-align: center;
    scroll-snap-stop: always;
    /* display: flex;
    align-items: center;
    justify-content: flex-end; */
    /* transform: translateZ(-1px); */
    /* transform: translateZ(-1px)  scale(2); */

`;

const StyledImage = styled.img`
    position: relative;
    height: 70vh;
    top: 50%;
    transform: translate(0, -50%);
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
    font-size: 1.1rem;
    margin-top: 80px;
    /* right: 100px; */
    /* top: 100px; */
    margin-right: 100px;
    /* margin-right: 0; */
    animation: ${props => props.divVis ? css`${visible} 1s forwards` : '' };
    float: right;
    p {
        height: 75vh;
        line-height: 3vw;
        /* margin-top: 50%; */
        position: relative;
        /* overflow-x: scroll; */
        overflow-x: auto;
        .summary {
            font-size: 1.5rem;
        }
    }
`;