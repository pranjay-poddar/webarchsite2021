import React, { useEffect } from "react";
import "./Projects.css";
import { Container } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/NavBar";
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
      image: require("../../files/projects/webarchly.png").default,
      tech: ["HTML", "CSS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/",
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
      image: "",
      tech: ["Flutter","Firebase","Figma"],
      githubLink: "https://github.com/",
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
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur iusto officiis, corrupti fugiat deleniti!",
      image: "",
      tech: ["React", "CSS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/",
      liveDemo: "",
      contributors: ["Soumik Chaudhuri", "Tanishq Kumar"],
    },
  ];
  return (
    <section className="projects-section">
      <Navbar isHome={false}/>
      <Container>
        <h2 className="projects-title">PROJECTS</h2>
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
