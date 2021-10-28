import styled from "styled-components";




const StyledImage = styled.img`

object-fit: contain;
max-height:100%; max-width:100%;
`;

const StyledImageContainer = styled.div`
    width:50%;
    height:50%;


`;


const StyledDiv = styled.div`
display:flex;
align-items:center;
flex-direction: column;
margin: 2rem 0;
width:100%;
`;

const StyledMap = { StyledDiv, StyledImage, StyledImageContainer };
export default StyledMap;