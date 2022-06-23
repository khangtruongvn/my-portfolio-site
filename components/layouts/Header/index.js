import React, { memo, useState } from 'react';
import CustomImage from 'khang-components/elements/CustomImage';
import Link from 'next/link';

const Header = () => {
  const [visibleMenuMobile, setvisibleMenuMobile] = useState(false);

  const handleToggle = () => setvisibleMenuMobile(!visibleMenuMobile);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <CustomImage
              src="/assets/png/john-doe.png"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img image"
              layout="fill"
            />
          </div>
          <span className="header__logo-sub">Khang Truong</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="#home" className="header__link">
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">
                About
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            {!visibleMenuMobile ? (
              <CustomImage
                src="/assets/svg/ham-menu.svg"
                alt="hamburger menu"
                className="header__main-ham-menu"
                onClick={handleToggle}
              />
            ) : (
              <CustomImage
                src="/assets/svg/ham-menu-close.svg"
                alt="hamburger menu close"
                className="header__main-ham-menu-close d-none"
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${visibleMenuMobile ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="#home"> Home </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#about"> About </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
