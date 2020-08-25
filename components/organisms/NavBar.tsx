import * as React from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecules/NavButtonList';
import LogoButton from '../atoms/LogoButton';

const NavContainer = styled.div`
  margin: 0 auto 0 auto;
  max-width: 1280px;
  height: 100%;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <LogoButton targetPath={'/'} />
      <NavButtonList />
    </NavContainer>
  );
};

export default NavBar;
