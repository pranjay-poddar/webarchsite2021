import { Link } from "react-router-dom";
import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services"
import Navbar from "./Navbar/NavBar"

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <SectionHead value="Testimonials" />
      <Testimonials />
      <SectionHead value="Services" />
      <Services />
    </div>
  );
};

export default Home;
