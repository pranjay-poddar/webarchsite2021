import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services"
import Landing from "./Landing/landing"

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <SectionHead value="Services" />
      <Services />
      <SectionHead value="Testimonials" />
      <Testimonials />
    </div>
  );
};

export default Home
