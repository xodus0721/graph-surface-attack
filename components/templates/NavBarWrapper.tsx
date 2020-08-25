import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../organisms/NavBar';

const NavBarContainer = styled.div`
  padding: 0 20px;
  background: #e2e2e2;
  height: 50px;
`;

const NavBarWrapper = () => {
  return (
    <NavBarContainer>
      <NavBar />
    </NavBarContainer>
  );
};

export default NavBarWrapper;
