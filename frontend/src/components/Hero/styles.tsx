import styled from "styled-components";
import heroImage from "../../assets/wed3-dark.jpg"


const StyledHero = styled.section`
    display: block;
    min-height: 750px;
    background: url(${heroImage}) center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    width: 100%;
`;
export default StyledHero