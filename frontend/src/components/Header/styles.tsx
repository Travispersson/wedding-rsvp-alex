import styled from "styled-components";



const StyledDiv = styled.div`
    width:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledH1 = styled.h1`
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    line-height: 1.2em;
    font-size: 60px;
    color: #fff;//#1c1c1c; // #6fe8ca;//#e8ca6f;
    margin:auto;
    left: 0;
    right: 0;
    text-align: center;
`

const StyledHeader = { StyledDiv, StyledH1 }

export default StyledHeader;