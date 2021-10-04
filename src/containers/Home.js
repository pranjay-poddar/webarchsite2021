import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services"
import Landing from "./Landing/landing"
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <SectionHead value="Services" />
      <Services />
      <SectionHead value="Testimonials" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home
