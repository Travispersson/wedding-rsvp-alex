import React from 'react';
import Hero from '../Hero';
import { StyledMain, StyledParagraph } from "./styles";
import About from "../About";
import SubHeader from "../SubHeader"
import VenueSection from '../VenueSection';
type HomePageProps = {
    scrollY: number
}

const HomePage: React.FC<React.PropsWithChildren<HomePageProps>> = (props) => {

    return (<StyledMain>
        <Hero id="home" scrollY={props.scrollY} />
        <SubHeader />
        <About id="how-we-met" sectionTitle={"how we met"}>
            <StyledParagraph>Lorem ipsum dolor sit amet, eum tollit alterum feugiat no, cum ei cetero accusam. Esse voluptua apeirian eu eum. Eu dolorem ancillae pri. In vim elitr inimicus, mea liberavisse definitionem in. Wisi doming in qui, te delectus adipiscing liberavisse pro.</StyledParagraph>
            <StyledParagraph>Et deleniti lucilius qui, vim legere aliquam habemus ut. Unum tibique mel id. Congue gubergren democritum duo id. Causae accumsan conceptam at est, labore aperiri eos ei, ei sed facete audiam inermis.</StyledParagraph>
            <StyledParagraph>Aperiri torquatos et sea, malis ignota mediocrem ea sit, eu sea quando singulis pericula. Erat vocent detraxit mei ne, no vix augue posidonium. Vis an nihil concludaturque, altera oblique nusquam no quo. Duo melius persequeris ex, in his iuvaret inimicus. Eos at omnium quaestio appellantur.
            </StyledParagraph>
        </About>
        <About id="wedding" sectionTitle={"blabla wedding info"}>
            <StyledParagraph>Lorem ipsum dolor sit amet, eum tollit alterum feugiat no, cum ei cetero accusam. Esse voluptua apeirian eu eum. Eu dolorem ancillae pri. In vim elitr inimicus, mea liberavisse definitionem in. Wisi doming in qui, te delectus adipiscing liberavisse pro.</StyledParagraph>
            <StyledParagraph>Et deleniti lucilius qui, vim legere aliquam habemus ut. Unum tibique mel id. Congue gubergren democritum duo id. Causae accumsan conceptam at est, labore aperiri eos ei, ei sed facete audiam inermis.</StyledParagraph>
            <StyledParagraph>Aperiri torquatos et sea, malis ignota mediocrem ea sit, eu sea quando singulis pericula. Erat vocent detraxit mei ne, no vix augue posidonium. Vis an nihil concludaturque, altera oblique nusquam no quo. Duo melius persequeris ex, in his iuvaret inimicus. Eos at omnium quaestio appellantur.
            </StyledParagraph>
        </About>
        <About id="venue" sectionTitle={"Venue"}>
            <StyledParagraph>Lorem ipsum dolor sit amet, eum tollit alterum feugiat no, cum ei cetero accusam. Esse voluptua apeirian eu eum. Eu dolorem ancillae pri. In vim elitr inimicus, mea liberavisse definitionem in. Wisi doming in qui, te delectus adipiscing liberavisse pro.</StyledParagraph>
            <StyledParagraph>Et deleniti lucilius qui, vim legere aliquam habemus ut. Unum tibique mel id. Congue gubergren democritum duo id. Causae accumsan conceptam at est, labore aperiri eos ei, ei sed facete audiam inermis.</StyledParagraph>
            <StyledParagraph>Aperiri torquatos et sea, malis ignota mediocrem ea sit, eu sea quando singulis pericula. Erat vocent detraxit mei ne, no vix augue posidonium. Vis an nihil concludaturque, altera oblique nusquam no quo. Duo melius persequeris ex, in his iuvaret inimicus. Eos at omnium quaestio appellantur.
            </StyledParagraph>
        </About>
        <VenueSection />
        <About id="rsvp" sectionTitle={"RSVP"}>
        </About>



    </StyledMain >)
}

export default HomePage