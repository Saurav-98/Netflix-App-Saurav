import React from 'react';
import styled from 'styled-components';

const NavContents = styled.div`
  display: flex;
  justify-content: space-between;

  .nav__logo {
    position: fixed;
    left: 0;
    width: 80px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }
  .nav__avatar {
    position: fixed;
    right: 20px;
    width: 30px;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <nav className="nav">
      <NavContents>
        <img
          className="nav__logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="netflix logo"
        />
        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="netflix user avatar"
        />
      </NavContents>
    </nav>
  );
};

export default NavBar;
