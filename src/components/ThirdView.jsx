import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import VizSensor from 'react-visibility-sensor';
import "../styles/app.scss";

export default function ThirdView({firstPic}) {
    const [divVis, setDivVis] = useState(false);
    return (
        <>
            <ThirdViewDev firstPic={firstPic}>
                <VizSensor
                    onChange={(isVisible) => {
                        setDivVis(isVisible);
                    }}>
                    <StyledDiv divVis={divVis}>
                        <p>
                            <div className="contact">CONTACT INFORMATION</div>
                            thomas.ravago.music@gmail.com
                            <a href="linkedin.com/in/thomasravago/">
                            linkedin.com/in/thomasravago/
                            </a>
                        </p>
                    </StyledDiv>
                </VizSensor>
            </ThirdViewDev>
        </>
    )
}

const ThirdViewDev = styled.div`
    background-image: url(${ ({firstPic}) => firstPic });
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
    text-align: center;
    color: white;
    padding: 20px;
    font-size: 1.4rem;
    line-height: 5vh;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 60vh;
    width: 25vw;
    left: 100px;
    margin-top: 50px;
    animation: ${props => props.divVis ? css`${visible} 1s forwards` : '' };
    margin-left: 100px;
    p {
        font-size: 1.3rem;
        .contact {
            font-size: 1.5rem;
            margin-bottom: 3vh;
        }
        a {
            display: block;
            text-decoration: none;
            color: white;
        }
    }
`;
