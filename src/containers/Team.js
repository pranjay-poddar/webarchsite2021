import { Link } from "react-router-dom";
import "./Team.css"


const Team = () => {
    return (
        <div className="Team">
            <h1>TEAM PAGE</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/team">Team</Link>
        </div>
    );
}

export default Team;
