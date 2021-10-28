import styled from "styled-components";


export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledParagraph = styled.p`
    color:#1c1c1c;
    font-size:14px;
    font-weight: 300;
    line-height: 2em;
    text-align:center;
    @media (max-width:870px){
        width:80%;
    }

`;