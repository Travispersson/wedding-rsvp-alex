import styles from '../styles/Home.module.scss'
import { useScrollYPosition } from 'react-use-scroll-position';
import Hero from '../components/Hero/Hero'
import SubHeader from '../components/SubHeader/SubHeader';
import About from '../components/About/About';
import Venue from '../components/Venue/Venue';
//import { useState } from 'react';
//import Modal from '../components/Modal/Modal';
import Image from 'next/image';
import Form from '../components/Form/Form';

export default function Home() {
  const scrollY = useScrollYPosition();
  //const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Hero id='home' scrollY={scrollY} />
      <SubHeader />
      <About id="how-we-met" sectionTitle={"how we met"}>
        <p className={styles.paragraph}>Some people might think that meeting the love of your life at work is not possible... we're here to prove them wrong!</p>
        <p className={styles.paragraph}>The year was 2017 when we both started working at Arlanda airport and we met eachother for the first time. Not knowing that we would fall in love together. Late 2017, after Sara visited London, one hungover Sunday we talked alot and learned so much more about each other. We decided to meet up for dinner. December 8th 2017, Sara got Alex to love sushi and Alex taught Sara the wonders of Star Wars. After that dinnerdate we both knew that the other was the ONE. That feeling you get when you've met the person you want to spend your life with.</p>
        <p className={styles.paragraph}>On February 22th 2018, was the day Sara said YES! and on September 21th 2022, is the day we say I DO!</p>
        <Image src={"/about.jpg"} className={styles.img} alt="the bride and groom" width="1444px" height="1080px" objectFit='contain' />
      </About>
      <About id="wedding" sectionTitle={"wedding"}>
        <div className={styles.infoContainer}>
          <div className={styles.info} >
            <h3 className={styles.title} >Ceremony(TBA)</h3>
            <p className={styles.time}>0:00PM - 0:00PM</p>
            <p className={styles.p}>Enkipo Seaview <br />Stalos, Chania<br /></p>
          </div>
          <div className={styles.info} >
            <h3 className={styles.title} >Reception(TBA)</h3>
            <p className={styles.time}>0:00PM - 0:00PM</p>
            <p className={styles.p}>Enkipo Seaview <br />Stalos, Chania<br /></p>
          </div>
        </div>
{/*         <button onClick={() => setOpen(true)} className={styles.buttonDressCode}>Dress code</button> */}
      </About>
{/*       <Modal open={open} setOpen={setOpen}>
        <About sectionTitle={"ugh... dress codes?"}>
          <p className={styles.paragraph}>Information to follow</p>
        </About>
      </Modal> */}
      <Venue />
      <About id="rsvp" sectionTitle={"RSVP"}>
        <Form />
      </About>
      <footer className={styles.footer} >Made with love by the grooms brother</footer>

    </div>
  )
}

