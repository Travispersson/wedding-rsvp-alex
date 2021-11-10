import styles from "../../styles/SubHeader.module.scss"

export default function SubHeader(props) {
    return (
        <section className={styles.subHeader}>
            <h4 className={styles.h4} >Come celebrate our wedding</h4>
            <hr className={styles.hr} />
            <h2 className={styles.h2} >Alexandros Kazalis</h2>
            <h3 className={styles.h3}>- <em className={styles.em}>and</em> -</h3>
            <h2 className={styles.h2} style={{ marginBottom: "17px" }}>Sara Rouhnavaz</h2>
            <hr className={styles.hr} />
            <h4 className={styles.h4} >Wednesday, September 21, 2022</h4>
        </section>
    )
}