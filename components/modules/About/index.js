const About = ({ data }) => {
  const { message, introduction, skills } = data;

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">{message.about}</span>
        </h2>
        <div className="about__content">
          <div dangerouslySetInnerHTML={{ __html: introduction }}></div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skills__skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
