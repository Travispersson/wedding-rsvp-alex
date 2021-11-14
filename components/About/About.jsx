import styles from "../../styles/About.module.scss"

export default function About(props) {

    return (<section className={styles.about} id={props.id}>
        <h2 className={styles.h2}>{props.sectionTitle}</h2>
        {props.children}
    </section>)
}