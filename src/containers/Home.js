import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
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
      <Header id="Domains" title="Domains" />
      <Domains />
      <Header id="Clients" title="Clients" alt />
      <Clients alt />
      <Header id="Testimonials" title="Testimonials" />
      <Testimonials />
      <Header id="Contact" title="Contact Us" alt />
      <ContactUs alt />
    </div>
  );
};

export default Home
