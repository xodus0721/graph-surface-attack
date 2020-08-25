import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  targetPath: string;
}

const ClickArea = styled.div`
  margin: 8px 0 0 5px;
  float: left;
  &:hover {
    cursor: pointer;
  }
`;

const LogoWrapper = styled.img`
  height: 30px;
`;

const LogoButton = ({ targetPath }: IProps) => {
  return (
    <ClickArea>
      <Link href={targetPath}>
        <LogoWrapper src="/logo.svg" alt="logo" />
      </Link>
    </ClickArea>
  );
};

export default LogoButton;
