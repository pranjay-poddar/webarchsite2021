import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services";
import Landing from "./Landing/landing";
import Clients from "./Clients/Clients";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <Header title="Services" />
      <Services />
      <Header title="Clients" />
      <Clients />
      <Header title="Testimonials" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home
