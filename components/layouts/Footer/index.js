import React, { memo } from 'react';
import CustomImage from 'khang-components/elements/CustomImage';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <div className="main-footer__icon">
                  <CustomImage src="/assets/png/linkedin-ico.png" alt="icon" />
                </div>
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <div className="main-footer__icon">
                  <CustomImage src="/assets/png/github-ico.png" alt="icon" />
                </div>
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <div className="main-footer__icon main-footer__icon--mr-none">
                  <CustomImage src="/assets/png/insta-ico.png" alt="icon" />
                </div>
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">John Doe</h4>
            <p className="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis tempora explicabo quae
              quod deserunt
            </p>
          </div>
        </div>
        {/* If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) */}
        <div className="main-footer__lower">
          © Copyright 2021. Made by
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
            Ram Maheshwari
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
