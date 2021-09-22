import React from "react";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";

const ProjectItem = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    tech,
    githubLink,
    liveDemo,
    contributors,
  } = project;

  const renderItem = (idx) => {
    if (idx % 2 === 1) {
      return (
        <>
          <Col>
            <a href={liveDemo} className="project-link"></a>
            <img
              src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
              className="project-image"
              alt="project"
            />
          </Col>
          <Col>
            <div className="project-details">
              <p className="title">{title}</p>
              <div className="description">{description}</div>
              <div className="tech-stack flex-end">
                {tech.map((item) => (
                  <p className="tech-item">{item}</p>
                ))}
              </div>
              <div className="contributors flex-end">
                <span className="web-blue">Contributors: </span>

                {contributors.map((item) => (
                  <p className="contributor-item ml-1">{item}</p>
                ))}
              </div>
            </div>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col>
            <div className="project-details text-left">
              <p className="title">{title}</p>
              <div className="description">{description}</div>
              <div className="tech-stack flex-start">
                {tech.map((item) => (
                  <p className="tech-item">{item}</p>
                ))}
              </div>
              <div className="contributors flex-start">
                <span className="web-blue mr-1">Contributors: </span>

                {contributors.map((item) => (
                  <p className="contributor-item mr-1">{item}</p>
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <a href={liveDemo} className="project-link"></a>
            <img
              src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png"
              className="project-image"
              alt="project"
            />
          </Col>
        </>
      );
    }
  };

  return (
    <div className="project-item">
      <Row>{renderItem(id)}</Row>
    </div>
  );
};

export default ProjectItem;
