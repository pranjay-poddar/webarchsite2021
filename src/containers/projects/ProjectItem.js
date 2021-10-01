import React from "react";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";
import GithubIcon from "../../files/githubicon.svg";
import LinkIcon from "../../files/linkicon.svg";

const ProjectItem = ({ project }) => {
  const {
    id,
    title,
    description,
    // image,
    tech,
    githubLink,
    liveDemo,
    contributors,
  } = project;

  const renderItem = (idx) => {
    if (idx % 2 === 1) {
      return (
        <>
          <Col className="project-item-left">
            {/* <a href={liveDemo} className="project-link"></a> */}
            <img
              src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
              className="project-image"
              alt="project"
            />
          </Col>
          <Col className="project-item-right">
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
              <div className="project-item-icons flex-end">
                <a href={githubLink} target="__blank">
                  <img alt="icon" src={GithubIcon} className="mr-1" />
                </a>
                <a href={liveDemo} target="__blank">
                  <img alt="icon" src={LinkIcon} />
                </a>
              </div>
            </div>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col className="project-item-left">
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
              <div className="project-item-icons">
                <a href={githubLink} target="__blank">
                  <img alt="icon" src={GithubIcon} className="mr-1" />
                </a>
                <a href={liveDemo} target="__blank">
                  <img alt="icon" src={LinkIcon} />
                </a>
              </div>
            </div>
          </Col>
          <Col className="project-item-right">
            {/* <a href={liveDemo} className="project-link"></a> */}
            <img
              src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png"
              className="project-image"
              link
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
