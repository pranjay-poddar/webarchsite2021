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
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur iusto officiis, corrupti fugiat deleniti!",
      image: "",
      tech: ["React", "CSS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/",
      liveDemo: "",
      contributors: [
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
      ],
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur iusto officiis, corrupti fugiat deleniti!",
      image: "",
      tech: ["React", "CSS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/",
      liveDemo: "",
      contributors: [
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
        "Tanishq Kumar",
        "Soumik Chaudhuri",
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
