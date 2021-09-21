import { Link } from "react-router-dom";
import "./About.css"


const About = () => {
    return (
        <div className="About">
            <h1>About Us</h1>
            <div >
            <div className="card">Lorem Ipsum is simply dummy text </div>
           
          
            </div>
           
             <Link to="/">Home</Link>
            <Link to="/Team">Team</Link>
        </div>
    );
}

export default About;