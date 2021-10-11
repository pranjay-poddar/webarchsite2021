import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services";
import Landing from "./Landing/landing";
import Clients from "./Clients/Clients";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContactUs from "./Contact-Us/ContactUs";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <Header id="Services" title="Services" />
      <Services />
      <Header id="Clients" title="Clients" alt />
      <Clients alt />
      <Header id="Testimonials" title="Testimonials" />
      <Testimonials />
      <Header id="Contact" title="Contact Us" alt />
      <ContactUs alt />
      <Footer />
    </div>
  );
};

export default Home
