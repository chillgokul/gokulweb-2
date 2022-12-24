import { Route, BrowserRouter,Routes } from "react-router-dom";
import AboutUs from "./aboutus/aboutus";
import Contactus from "./segments/contactus/contactus";
import Cta from "./segments/cta/cta";
import Footer from "./segments/footer/footer";
import Hero from "./segments/hero/hero";
import Home from "./segments/homepage";
import Services from "./segments/services/services";

//import Testimonials from "./segments/testimonials/testimonials";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="contact" element={<Contactus />}/>
        <Route path="about" element={<AboutUs />}/>

      </Routes>
    </BrowserRouter>
  );
}