
import Cta from "./cta/cta";
import Footer from "./footer/footer";
import Hero from "./hero/hero";
import Services from "./services/services";

export default function Home(){
    return(
        <>
        <Hero />
        <Cta />
        
        <Services />
        <Footer />
        </>
    );

}