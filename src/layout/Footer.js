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
            </a>
            Nicola Tesla
          </li>
          <li>
            <a href="tele:1234567891">
            <i class="fas fa-phone-alt"></i>
            </a>
            Ed Snowden
          </li>
        </ul>
      </div>
      <div className={classes.socialContainer}>
        <div className={classes.orgContainer}>
          <h5>By Webarch</h5>
        </div>
        <div className={classes.iconsContainer}>
          <ul className={classes.socialLinks}>
            <li>
              <a
                className={classes.insta}
                href="https://www.instagram.com/codificacion_circulo/"
              >
                <i className={"fab fa-instagram"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/company/codificacion-circulo/"
              >
                <i className={"fab fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.discord}
                href="https://discord.gg/6rqXhXrYYc"
              >
                <i className={"fab fa-discord"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.github}
                href="https://github.com/Codificacion-Circulo"
              >
                <i className={"fab fa-github"}></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.licenseContainer}>
          <h5>Copyright© 2021 webarchsrm.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
