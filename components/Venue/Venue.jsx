import styles from "../../styles/Venue.module.scss"
import Image from "next/image"


export default function Venue() {

    return (<div className={styles.venue}>

        <div className={styles.imgContainer}>
            <Image src={"/venue-map.png"} className={styles.img} alt="place of venue" width="824px" height="498px" objectFit='contain' onClick={() => window.open("https://www.google.com/maps/dir//enkipo-seaview/@35.5041619,23.9499505,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x149c7db180c8a147:0xd0aaf165e88c7451!2m2!1d23.9562925!2d35.5119873", '_blank').focus()} />
        </div>
        <span className={styles.span}>Tap on the map for directions.</span>

    </div>)
};