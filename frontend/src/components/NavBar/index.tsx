import React, { useState } from 'react'
import { Link } from 'react-scroll'
import StyledNavbar, { StyledNavIcon } from './styles'

type NavBarProps = {
    scrollY: number
}

const NavBar: React.FC<NavBarProps> = (props) => {

    const [open, setOpen] = useState(false);

    return (<StyledNavbar scrollY={props.scrollY} >

        <ul>
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>HOME</Link></li>
            <li><Link to="how-we-met" spy={true} smooth={true}>HOW WE MET</Link></li>
            <li><Link to="wedding" spy={true} smooth={true}>WEDDING</Link></li>
            <li><Link to="venue" spy={true} smooth={true}>VENUE</Link></li>
            <li style={{ marginLeft: "auto" }}><Link activeClass="active" to="rsvp" spy={true} smooth={true}>RSVP</Link></li>
            <StyledNavIcon onClick={() => setOpen(!open)} open={open}>
                <div />
                <div />
                <div />
            </StyledNavIcon>
        </ul>
    </StyledNavbar>)
}

export default NavBar