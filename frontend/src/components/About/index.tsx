import React from 'react'
import StyledAbout from './styles'

type AboutProps = {
    sectionTitle: string;
    id: string;
}

const About: React.FC<React.PropsWithChildren<AboutProps>> = (props) => {

    return (<StyledAbout.StyledSection id={props.id}>
        <StyledAbout.StyledH2>{props.sectionTitle}</StyledAbout.StyledH2>
        {props.children}
    </StyledAbout.StyledSection>)
}

export default About