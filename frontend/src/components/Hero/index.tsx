import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import StyledHero from './styles'

type HeroProps = {
    scrollY: number;
    id: string;
}
const Hero: React.FC<HeroProps> = (props: HeroProps) => {

    return (<StyledHero id={props.id}>
        <NavBar scrollY={props.scrollY} />
        {/* <Header /> */}
    </StyledHero>)
}

export default Hero