import React from 'react'
import StyledSubHeader from './styles';

const SubHeader: React.FC = () => {

    return (
        <StyledSubHeader.StyledDiv>
            <StyledSubHeader.StyledH4>Come celebrate our wedding</StyledSubHeader.StyledH4>
            <StyledSubHeader.StyledHr />
            <StyledSubHeader.StyledH2>Alexandros Kazalis</StyledSubHeader.StyledH2>

            <StyledSubHeader.StyledH3>— <StyledSubHeader.StyledEm>and</StyledSubHeader.StyledEm> —</StyledSubHeader.StyledH3>

            <StyledSubHeader.StyledH2 style={{ marginBottom: "17px" }}>Sara Rouhnavaz</StyledSubHeader.StyledH2>
            <StyledSubHeader.StyledHr />
            <StyledSubHeader.StyledH4>Wednesday, September 21, 2022</StyledSubHeader.StyledH4>
        </StyledSubHeader.StyledDiv>

    );
}

export default SubHeader