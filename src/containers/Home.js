import { Link } from "react-router-dom";
import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="Home">
      <SectionHead value="Testimonials" />
      <Testimonials />
    </div>
  );
};

export default Home;
