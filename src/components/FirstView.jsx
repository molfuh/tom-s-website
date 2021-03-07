import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SecondView from './SecondView.jsx';
// import React, { useState } from 'react';


export default function FirstView({ coverPic }) {
    const [transition, setTransition] = useState(false);
    const handleTransition = () => {
        setTransition(true);
    }
    return (
        <>
            <FirstViewDiv coverPic={coverPic}>
                {/* {transition && {handleTransition()} */}
                <StyledDiv transition={transition}>
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
            </FirstViewDiv>
            <SecondView />
        </>
    )
}

const FirstViewDiv = styled.div`
    background-image: url(${ ({coverPic}) => coverPic });
    /* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    /* filter: grayscale(100%); */
    background-size: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const visible = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const StyledDiv = styled.div`
    opacity: 0;
    position: absolute;
    color: white;
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 80vh;
    width: 25vw;
    left: 100px;
    animation: ${visible} 1s forwards 1s;
`;
