import React from 'react';
import styled from 'styled-components';

export default function SecondView() {
    return (
        <>
            <SecondViewDiv>
                {/* use sass to set up grid system for div? */}
                <StyledDiv>
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
            </SecondViewDiv>
        </>
    )
}

const SecondViewDiv = styled.div`
    position: absolute;
    top: 100vh;
    height: 110vh;
    width: 100vw;
    background-color: red;
`;

const StyledDiv = styled.div`
    position: absolute;
    color: white;
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 80vh;
    width: 25vw;
    right: 100px;
    top: 100px;
`;