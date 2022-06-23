import CustomImage from 'khang-components/elements/CustomImage';

const Projects = ({ data }) => {
  const { message, projects } = data;

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">{message.projects}</span>
        </h2>
        <div className="projects__content">
          {projects ? (
            projects.map((project, index) => (
              <div className="projects__row" key={index}>
                <div className="projects__row-img-cont">
                  <CustomImage
                    src="/assets/jpeg/project-mockup-example.jpeg"
                    alt="Software Screenshot"
                    className="projects__row-img"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">{project.name}</h3>
                  <p className="projects__row-content-desc">{project.description}</p>
                  <a
                    href="./project-1.html"
                    className="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    View more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
