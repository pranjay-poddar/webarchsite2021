import React, { useEffect } from "react";
import "./Projects.css";
import { Container } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/NavBar";
import Header from "../Header/Header";
import { useLocation } from "react-router";

const Projects = () => {

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

  const projects = [
    {
      id: 1,
      title: "Webarch.ly",
      description:
        "Webarch.ly is a simple tool that helps you deal with long URLs for free, providing you with short, efficient and customizable links at your service.",
      image: require("../../files/projects/webarchly.webp").default,
      tech: ["HTML", "CSS", "Node.js", "MongoDB"],
      githubLink: "",
      liveDemo: "https://webarch-shortener.herokuapp.com",
      contributors: [
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Ananya Negi",
      ],
    },
    {
      id: 2,
      title: "SRM Essentials",
      description:
        "A mobile application that serves as a one stop solution for all SRMites. Whether it's calculating your GPA or accessing study material, this app has got you covered.",
      image: require("../../files/projects/srm_essentials.webp").default,
      tech: ["Flutter","Firebase",],
      githubLink: "",
      liveDemo: "",
      contributors: [
        "Abhigyan Singh",
        "Payel Paul",
        "Kevin Jeenu",
        "Pradeep",
      ],
    },
    {
      id: 3,
      title: "College Made Simpler",
      description:
        "A web app that helps students to find automated blogs, courses and create polls on important issues which are going on in college in order to gain an idea of what other students have to say about them and also how many students are in support of the cause. It helps in connecting a large number of students, making them aware of the issues, and helping them come together to get it resolved.",
      image: require("../../files/projects/college-made-simpler.webp").default,
      tech: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/mmuazam98/InWeb",
      liveDemo: "https://collegemadesimpler.netlify.app/",
      contributors: ["Pranjay Poddar", "Mohammad Muazam", "Chirag Bhatia", "Palak Aggarwal",],
    },
    {
      id: 4,
      title: "Webarch Forms",
      description:
        "A web application that creates online forms in a quick and easy manner along with extensive customization tools.",
      image: require("../../files/projects/webarchForms.webp").default,
      tech: ["HTML", "CSS", "Node.js", "MongoDB"],
      githubLink: "",
      liveDemo: "",
      contributors: ["Mohammad Muazam", "Jayesh Jayanandan", "Pranjay Poddar", "Antara Gupta", "Sreyom Sresaan", ],
    },
  ];
  return (
    <section className="projects-section">
      <Navbar isHome={false}/>
      <Header title="Projects" id="Projects" />
      <Container>
        {/* <h2 className="projects-title">PROJECTS</h2> */}
        <div className="projects-list">
          {projects.map((project, idx) => (
            <ProjectItem id={project.id} project={project} key={idx}/>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
