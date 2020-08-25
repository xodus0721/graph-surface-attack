import * as React from 'react';
import styled from 'styled-components';
import NavTextButton from '../atoms/NavTextButton';

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  height: 100%;
`;

const NavButtonList = () => {
  return (
    <NavButtonWrapper>
      <NavTextButton buttonText={'시작하기'} targetPath={'/start'} />
      <NavTextButton buttonText={'로그인'} targetPath={'/signin'} />
      <NavTextButton buttonText={'회원가입'} targetPath={'/signup'} />
    </NavButtonWrapper>
  );
};

export default NavButtonList;
