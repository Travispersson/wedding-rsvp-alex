import styles from '../styles/Home.module.scss'
import { useScrollYPosition } from 'react-use-scroll-position';
import Hero from '../components/Hero/Hero'
import SubHeader from '../components/SubHeader/SubHeader';
import About from '../components/About/About';
import Venue from '../components/Venue/Venue';

export default function Home() {
  const scrollY = useScrollYPosition();
  return (
    <div className={styles.container}>
      <Hero id='home' scrollY={scrollY} />
      <SubHeader />
      <About id="how-we-met" sectionTitle={"how we met"}>
        <p className={styles.paragraph}>Some people might think that meeting the love of your life at work is not possible... we're here to prove them wrong!</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, eum tollit alterum feugiat no, cum ei cetero accusam. Esse voluptua apeirian eu eum. Eu dolorem ancillae pri. In vim elitr inimicus, mea liberavisse definitionem in. Wisi doming in qui, te delectus adipiscing liberavisse pro.</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, eum tollit alterum feugiat no, cum ei cetero accusam. Esse voluptua apeirian eu eum. Eu dolorem ancillae pri. In vim elitr inimicus, mea liberavisse definitionem in. Wisi doming in qui, te delectus adipiscing liberavisse pro.</p>
      </About>
      <About id="wedding" sectionTitle={"blabla wedding info"}>
        <div className={styles.infoContainer}>
          <div className={styles.info} >
            <h3 className={styles.title} >Ceremony</h3>
            <p className={styles.time}>3:00PM - 4:00PM</p>
            <p className={styles.p}>Enkipo Seaview <br />Stalos, Chania<br /></p>
          </div>
          <div className={styles.info} >
            <h3 className={styles.title} >Reception</h3>
            <p className={styles.time}>3:00PM - 4:00PM</p>
            <p className={styles.p}>Enkipo Seaview <br />Stalos, Chania<br /></p>
          </div>
        </div>

      </About>

      <About sectionTitle={"Venue"} />
      <Venue />

      <About id="rsvp" sectionTitle={"RSVP"}></About>

    </div>
  )
}

