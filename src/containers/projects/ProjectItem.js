import React, {useState} from "react";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";
import GithubIcon from "../../files/githubicon.svg";
import LinkIcon from "../../files/linkicon.svg";

const ProjectItem = ({ project }) => {
  let {
    id,
    title,
    description,
    image,
    tech,
    githubLink,
    liveDemo,
    contributors,
  } = project;

  const [imageLoaded, setImageLoaded] = useState(false);

  const renderItem = (idx) => {
    if (idx % 2 === 1) {
      image = image !== "" ? image : "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg";
      return (
        <>
          <Col className="project-item-left smooth-img-wrapper">
            {/* <a href={liveDemo} className="project-link"></a> */}
            <img
              src={image}
              className={`project-image smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
              onLoad={()=> setImageLoaded(true)}
              alt="project"
            />
            {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
          </Col>
          <Col className="project-item-right">
            <div className="project-details">
              <p className="title">{title}</p>
              <div className="description">{description}</div>
              <div className="tech-stack flex-end">
                {tech.map((item, idx) => (
                  <p className="tech-item" key={idx}>{item}</p>
                ))}
              </div>
              <div className="contributors flex-end">
                <span className="web-blue">Contributors: </span>

                {contributors.map((item, idx) => (
                  <p className="contributor-item ml-1" key={idx}>{item}</p>
                ))}
              </div>
              <div className="project-item-icons flex-end">
                {(githubLink !== "") && (<a href={githubLink} target="__blank">
                  <img alt="icon" src={GithubIcon} className="mr-1" />
                </a>)}
                {(liveDemo !== "") && (<a href={liveDemo} target="__blank">
                  <img alt="icon" src={LinkIcon} />
                </a>)}
              </div>
            </div>
          </Col>
        </>
      );
    } else {
      image = image !== "" ? image : "https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png";
      return (
        <>
          <Col className="project-item-left">
            <div className="project-details text-left">
              <p className="title">{title}</p>
              <div className="description">{description}</div>
              <div className="tech-stack flex-start">
                {tech.map((item,idx) => (
                  <p className="tech-item" key={idx}>{item}</p>
                ))}
              </div>
              <div className="contributors flex-start">
                <span className="web-blue mr-1">Contributors: </span>

                {contributors.map((item,idx) => (
                  <p className="contributor-item mr-1" key={idx}>{item}</p>
                ))}
              </div>
              <div className="project-item-icons">
                {(githubLink !== "") && (<a href={githubLink} target="__blank">
                  <img alt="icon" src={GithubIcon} className="mr-1" />
                </a>)}
                {(liveDemo !== "") && (<a href={liveDemo} target="__blank">
                  <img alt="icon" src={LinkIcon} />
                </a>)}
              </div>
            </div>
          </Col>
          <Col className="project-item-right">
            {/* <a href={liveDemo} className="project-link"></a> */}
            <img
              src={image}
              className={`project-image smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
              onLoad={()=> setImageLoaded(true)}
              link="true"
              alt="project"
            />
            {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
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
