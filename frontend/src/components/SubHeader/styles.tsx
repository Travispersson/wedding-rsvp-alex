import styled from "styled-components";



const StyledDiv = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    margin: 2rem 0;
    width:100%;
`;

const StyledH2 = styled.h2`

    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #1c1c1c;;
    letter-spacing: 1.2px;
    line-height: 1.2em;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    margin: 1em 0 .3em;
    
    
`;

const StyledH4 = styled.h4`
font-size: 14px;
line-height: 1.6em;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 1.8px;
font-weight: 300;
font-style: normal;
@media (max-width: 344px){
    font-size:13px;
    letter-spacing: 1.2px;
}
`;

const StyledH3 = styled.h3`
    color:#1c1c1c;
    font-family:'Raleway',sans-serif;
    letter-spacing: .5px;
    font-weight: 300;
    line-height: 1.4em;
    font-size: 14px;
    text-decoration: none;
    font-style:normal;
    margin: 1em 0 .3em;
    text-align: center;
`;

const StyledEm = styled.em`
    color:#1c1c1c;
    font-family:'EB Garamond',serif;
    letter-spacing: .5px;
    font-weight: 300;
    font-size:14px;
    line-height: 1.4em;
    text-align: center;
`;

const StyledHr = styled.hr`
color: #eee;
 background-color: #eee;
 border: none;
 height:2px;
width:85%;
margin-top: 17px;
margin-bottom: 17px;
`;

const StyledSubHeader = { StyledDiv, StyledH2, StyledH3, StyledHr, StyledEm, StyledH4 }

export default StyledSubHeader;