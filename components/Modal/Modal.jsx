import styles from "../../styles/Modal.module.scss"

export default function Modal(props) {
    return (
        <section id="modal" className={styles.modal} style={{ display: props.open ? '' : 'none' }}>
            <div className={styles.modalContent}>
                <button onClick={() => props.setOpen(false)} className={styles.close}>
                    x
                </button>
                {props.children}
            </div >
        </section >
    )
}