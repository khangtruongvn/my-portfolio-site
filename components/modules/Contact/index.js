import React from 'react';

const Contact = ({ message }) => {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">{message}</span>
        </h2>
        <div className="contact__form-container">
          <form action="#" className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                defaultValue={''}
              />
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
