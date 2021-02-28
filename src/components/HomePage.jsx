import React from 'react';
import styled from 'styled-components'

export default function HomePage({ coverPic }) {
    return (
        <>
            <FirstView coverPic={coverPic}>
                {/* use sass to set up grid system for div? */}
                <StyledDiv>hello</StyledDiv>
            </FirstView>
            <SecondView>
                {/* get free background? */}
                Second
            </SecondView>
            <ThirdView>
                Third
            </ThirdView>
        </>
    )
}

const FirstView = styled.div`
    background-image: url(${ ({coverPic}) => coverPic });
    background-size: cover;
    height: 100vh;
    /* position: absolute; */
`;

const StyledDiv = styled.div`
    position: relative;
`;

const SecondView = styled.div`
    background-color: black;
    height: 100vh;
`;

const ThirdView = styled.div`
    background-color: red;
    height: 100vh;
`;