import classes from "../layout/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
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
              <i class="fas fa-envelope"></i>
              webarchsrm@gmail.com
            </a>
          </li>
          <li>
            <a href="tele:1234567891">
              <i class="fas fa-phone-alt"></i>
              Nicola Tesla
            </a>
          </li>
          <li>
            <a href="tele:1234567891">
              <i class="fas fa-phone-alt"></i>
              Ed Snowden
            </a>
          </li>
        </ul>
        <div className={classes.iconsContainer}>
          <h3>Follow Us</h3>
          <ul className={classes.socialLinks}>
            <li>
              <a
                className={classes.insta}
                href="https://github.com/WebarchClub"
              >
                <i className={"fab fa-instagram"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.linkedin}
                href="https://github.com/WebarchClub"
              >
                <i className={"fab fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.discord}
                href="www.google.com"
              >
                <i className={"fab fa-discord"}></i>
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
      <div className={classes.msgContainer}>
        <p>
          Developed With <i class="fas fa-heart"></i> By Team Webarch{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
