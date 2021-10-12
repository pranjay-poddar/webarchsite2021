import classes from "./Footer.module.css";
import footerImg from "../../files/footer.svg";

const Footer = () => {
  return (
    <div className={classes.footerDiv}>
      <div className={classes.footerContainer}>
        <div className={classes.illustration}>
          <img src={footerImg} alt="illustration" />
        </div>
        <div>
          <div className={classes.exploreContainer}>
            <ul className={classes.explore}>
              <h3>Explore</h3>
              <li>Home</li>
              <li>AboutUs</li>
              <li>Team</li>
              <li>ContactUs</li>
            </ul>
            <ul className={classes.contact}>
              <h3>Reach Us</h3>
              <li>
                <a href="mailto:">
                  <i className="fas fa-envelope"></i>
                  webarchsrm@gmail.com
                </a>
              </li>
              <li>
                <a href="tele:9549954599">
                  <i className="fas fa-phone-alt"></i>
                  Divij Gupta
                </a>
              </li>
            </ul>
            <div className={classes.iconsContainer}>
              <h3>Follow Us</h3>
              <ul className={classes.socialLinks}>
                <li>
                  <a
                    className={classes.insta}
                    href="https://www.instagram.com/webarchclub"
                  >
                    <i className={"fab fa-instagram"}></i>
                  </a>
                </li>
                <li>
                  <a
                    className={classes.linkedin}
                    href="https://www.linkedin.com/company/webarchclub/"
                  >
                    <i className={"fab fa-linkedin"}></i>
                  </a>
                </li>
                <li>
                  <a
                    className={classes.github}
                    href="https://github.com/WebarchClub"
                  >
                    <i className={"fab fa-github"}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.msgContainer}>
        <p>
          Developed With <i className="fas fa-heart"></i> By Team Webarch{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
