import dynamic from "next/dynamic"
import styles from "../../styles/Hero.module.scss"

const NavBar = dynamic(() => import("./../NavBar/NavBar"), {
    ssr: false,
});

export default function Hero(props) {


    return (
        <section id={props.id} className={styles.hero}>
            <NavBar scrollY={props.scrollY} />

        </section>
    )
}