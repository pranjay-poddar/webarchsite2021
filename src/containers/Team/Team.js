import "./Team.css"
import Navbar from "../Navbar/NavBar";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "@firebase/firestore";
import { useLocation } from "react-router";

const Team = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.hash){
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
        }else{
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location])

    const range = (start, end) => {
        return Array(Number(end) - Number(start) + 1).fill().map((_, idx) => String(Number(start) + idx))
    }

    const [teamMembers, setTeamMembers] = useState([]);
    const teamIds = range(process.env.REACT_APP_MEMBERS_START, process.env.REACT_APP_MEMBERS_END);

    useEffect(() => {
        const q = query(collection(db, "team"));
        var members = [];
        getDocs(q).then(data => {
            data.forEach(m => {
                if(teamIds.includes(m.data().order)){
                    members.push(m.data())
                }
            });
        })
        .then(() => {
            members.sort(function(a, b) {
                var keyA = Number(a.order),
                  keyB = Number(b.order);
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              });
            setTeamMembers(members);
        })
        .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [])

    let lis = teamMembers.map((m,idx) => (
        <li key={idx} className="transition">
            <div className="wrapper">
                {" "}
                

                <div className="team-img">
                    <img alt="team" className="responsive-img" src={m.photo} />
                </div>
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
        </div>

    );
}

export default Team;
