import styles from "../../styles/Hero.module.scss"
import NavBar from "../NavBar/NavBar"



export default function Hero(props) {


    return (
        <section id={props.id} className={styles.hero}>
            <NavBar scrollY={props.scrollY} />

        </section>
    )
}