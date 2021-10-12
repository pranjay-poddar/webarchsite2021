import React from "react";
import "./Projects.css";
import { Container } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/NavBar";

const Projects = () => {
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
