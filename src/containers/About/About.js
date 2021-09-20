import { Link } from "react-router-dom";
import "./About.css"


const About = () => {
    return (
        <div className="About">
            <h1>About Us</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/About">About</Link>
        </div>
    );
}

export default About;