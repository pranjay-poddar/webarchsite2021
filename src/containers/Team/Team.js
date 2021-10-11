import "./Team.css"
import Navbar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "@firebase/firestore";

const Team = () => {

    const [teamMembers, setTeamMembers] = useState([]);
    const teamIds = ["39", 46];

    useEffect(() => {
        const q = query(collection(db, "team"), where("order", "in", teamIds));
        var members = [];
        getDocs(q).then(data => {
            data.forEach(m => {
                members.push(m.data())
            });
        })
        .then(() => {
            setTeamMembers(members);
        })
        .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [])

    let lis = teamMembers.map((m,idx) => (
        <li key={idx} className="transition">
            <div className="wrapper">
                {" "}
                

                <img alt="team" className="responsive-img" src={m.photo} />
                <h3 className="transition">
                    {m.name} <em>{m.role}</em>
                </h3>
                <span className="transition">
                    <div className="text-wrapper transition">
                        <ul className="social">
                            <li className="transition">
                                <a href={m.insta}>
                                    <img alt="team" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" />
                                </a>
                            </li>
                            <li className="transition">
                                <a href={m.git}>
                                    <img alt="team" src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" />
                                </a>
                            </li>
                            <li className="transition">
                                <a href={m.fb}>
                                    <img alt="team" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </span>{" "}
            </div>
        </li>
    ));

    return (
        <div className="Team">
            <Navbar isHome={false} />
            <div className="team-body">
                <p className="team-page-heading">Meet The Team</p>
                <div className="hero">
                    <h1 className="tagline">
                        Bringing out the best in each other!
                    </h1>
                </div>

                <ul className="five">
                    {lis}
                </ul>
            </div>
            <Footer />
        </div>

    );
}

export default Team;
