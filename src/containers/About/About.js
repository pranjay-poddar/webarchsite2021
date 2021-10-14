import './About.css'

const About = ({alt}) => {
  return (
    <div className={alt ? "About alt" : "About"}>
      <p className='about-tagline'>
        We are a student body organisation and work towards devloping skills and
        also providing a learning platform skills and also providing a learning
        platform in the university.
      </p>
      <div class='about-container'>
        <div class='about-box'>
          <div class='about-box-container about-primary'>
            <div class='about-box-icon'>
              <i class='fa fa-question-circle'></i>
            </div>
            <div class='about-box-body'>
              <h4 class='about-box-title'>
                <span class='about-badge'>What we do?</span>
              </h4>
              <p className='about-box-p'>
                You think of an idea we implement it! <br />
                We offer a wide range of services. <br /> Such as web designing
                and development.
                <br />
                Graphic designing, mobile applications development and VFX and
                many more...
              </p>
            </div>
          </div>
          <div class='about-box-container about-danger'>
            <div class='about-box-icon'>
              <i class='fa fa-question-circle'></i>
            </div>
            <div class='about-box-body'>
              <h4 class='about-box-title'>
                <span class='about-badge'>Who are we?</span>
              </h4>
              <p className='about-box-p'>
                We are a team of young, proficient and energetic minds who
                strive to deliver their best. We are the oldest technical club
                of SRM Institute of Science and Technology.
              </p>
            </div>
          </div>
          <div class='about-box-container about-success'>
            <div class='about-box-icon'>
              <i class='fa fa-question-circle'></i>
            </div>
            <div class='about-box-body'>
              <h4 class='about-box-title'>
                <span class='about-badge'>Why us ?</span>
              </h4>
              <p className='about-box-p'>
                We know the industry, we know the game and we are here to help
                you grow. We have the best team We are the Oldest and most
                experienced We are WebArch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;