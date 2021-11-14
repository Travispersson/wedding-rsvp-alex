import styles from "../../styles/Navbar.module.scss"
import { useState } from "react";
import { Link } from 'react-scroll'



export default function NavBar(props) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (open) {
            document.body.classList.remove('stopScrolling')
        } else {
            document.body.classList.add('stopScrolling')
        }
        setOpen(!open);
    };

    const stylesUl = props.scrollY >= 20 ? {
        padding: "10px 0px"
    } : {};

    const stylesNavBar = props.scrollY >= 20 ? {
        position: "fixed",
        backgroundColor: "rgba(50,50,59,.7)",
        zIndex: "999",
        width: "100%",
        borderBottom: "medium none",
        transition: "background-color 300ms ease-in-out"
    } : {};

    const links = () => {
        return (
            <>
                <li  ><Link activeClass="active" to="home" spy={true} smooth={true}><p onClick={() => open && handleClick()}>HOME</p></Link></li>
                <li  ><Link to="how-we-met" spy={true} smooth={true}><p onClick={() => open && handleClick()}>HOW WE MET</p></Link></li>
                <li  ><Link to="wedding" spy={true} smooth={true}><p onClick={() => open && handleClick()}>WEDDING</p></Link></li>
                <li style={open ? {} : { marginLeft: "auto" }}><Link activeClass="active" to="rsvp" spy={true} smooth={true}><p onClick={() => open && handleClick()}>RSVP</p></Link></li>
            </>
        )
    }

    const menu = () => {
        return (
            <ul style={open ? { ...stylesUl, height: "100%", top: "0%", padding: "0" } : stylesUl}>
                {open ? <div>{links()}</div> : <div className={open ? "" : styles.hideOnSmallScreen}>
                    {links()}
                </div>}
                <div className={styles.hamburgerMenu} onClick={() => handleClick()} style={open ? { position: "absolute", top: "25px", right: "25px" } : {}}>
                    <div style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
                    <div style={{
                        opacity: open ? '0' : '1',
                        transform: open ? 'translateX(20px)' : 'translateX(0)'
                    }} />
                    <div style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
                </div>
            </ul>
        )
    }

    return (
        <nav style={open ? {} : stylesNavBar} className={open ? styles.overlay : styles.navBar} onClick={() => open && handleClick()}>
            {menu()}
        </nav>
    )
}