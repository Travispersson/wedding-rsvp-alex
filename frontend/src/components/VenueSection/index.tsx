import React from 'react'
import StyledMap from './styles';
import mapOfVenue from "../../assets/venue-map.png"
const VenueSection: React.FC = () => {

    return (
        <StyledMap.StyledDiv id="venue">
            <StyledMap.StyledImageContainer>
                <StyledMap.StyledImage src={mapOfVenue} />
            </StyledMap.StyledImageContainer>
        </StyledMap.StyledDiv>

    );
}

export default VenueSection