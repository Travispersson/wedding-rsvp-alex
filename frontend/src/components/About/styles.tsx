import styled from "styled-components";



const StyledSection = styled.section`
    display:flex;
    align-items:center;
    flex-direction: column;
    
    margin: 1rem 0;
    @media (min-width:870px){
        width:500px;
    }
    @media (max-width:870px){
        width:100%;
    }

`;

const StyledH2 = styled.h2`
width: 100%;
    padding: 2rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    color: rgb(61, 67, 81);
    letter-spacing: 1.2px;
    line-height: 1.2em;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    
`;



const StyledAbout = { StyledSection, StyledH2 }

export default StyledAbout;