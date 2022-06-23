import CustomImage from 'khang-components/elements/CustomImage';

const Banner = ({ data }) => {
  console.log(data)
  const { name, message, socials } = data;

  return (
    <section id="home" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is {name}</h1>
        <div className="home-hero__info">
          <p className="text-primary">{message.banner}</p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        {socials ? (
          socials.map((social, index) => (
            <div key={index} className="home-hero__social">
              <a href={social.link} className="home-hero__social-icon-link" title={social.name}>
                <CustomImage
                  src='/assets/png/github-ico.png'
                  alt={social.name}
                  className="home-hero__social-icon"
                />
              </a>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse" />
      </div>
    </section>
  );
};
export default Banner;
