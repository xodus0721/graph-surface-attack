import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  buttonText: string;
  targetPath: string;
}

const ClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const NavText = styled.span`
  color: black;
  font-size: 18px;
  padding: 10px 6px;
  margin: 0 12px;
`;

const NavTextButton = ({ buttonText, targetPath }: IProps) => {
  return (
    <ClickArea>
      <Link href={targetPath}>
        <NavText>{buttonText}</NavText>
      </Link>
    </ClickArea>
  );
};

export default NavTextButton;
