import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import SecondView from './SecondView.jsx';
import VizSensor from 'react-visibility-sensor';

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
                    CONTACT INFORMATION
                    <br />
                    thomas.ravago.music@gmail.com
                    <br />
                    linkedin.com/in/thomas-ravago
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
            </ThirdViewDev>
        </>
    )
}

const ThirdViewDev = styled.div`
    background-image: url(${ ({firstPic}) => firstPic });
    background-size: cover;
    /* background-image: url(${ ({coverPic}) => coverPic }); */
    /* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    /* filter: grayscale(100%); */
    /* position: absolute; */
    /* top: 200vh; */
    height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
`;

const visible = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const StyledDiv = styled.div`
    opacity: 0;
    /* position: absolute;]]]] */
    text-align: center;
    color: white;
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 80vh;
    width: 25vw;
    left: 100px;
    margin-top: 50px;
    animation: ${props => props.divVis ? css`${visible} 1s forwards` : '' };
    /* animation: ${visible} 1s forwards 0.5s; */
    margin-left: 100px;
`;
