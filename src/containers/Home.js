import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Domains from "./Domains/Domains";
import Landing from "./Landing/landing";
import Clients from "./Clients/Clients";
import Header from "./Header/Header";
import ContactUs from "./Contact-Us/ContactUs";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if(location.hash){
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    }else{
      window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location])

  return (
    <div className="Home">
      <Landing />
      <Header id="About" title="About" />
      <About />
      <Header id="Domains" title="Domains" alt/>
      <Domains alt/>
      <Header id="Clients" title="Clients" />
      <Clients />
      <Header id="Testimonials" title="Testimonials" alt/>
      <Testimonials alt/>
      <Header id="Contact" title="Contact Us" />
      <ContactUs />
    </div>
  );
};

export default Home
