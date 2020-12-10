import React from 'react';
import styled from 'styled-components';
import SideBarTitle from './SideBarTitle';

type Props = {
  title: string;
  children: React.ReactNode;
};
const SideBarContent: React.FC<Props> = (props) => {
  const { children, title } = props;
  return (
    <StyledContainer>
      <SideBarTitle label={title} />
      {children}
    </StyledContainer>
  );
};
export default SideBarContent;
const StyledContainer = styled.div`
  margin-bottom: 48px;
`;
