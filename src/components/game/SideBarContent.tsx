import React from 'react';
import styled from 'styled-components';
import SideBarTitle from './SideBarTitle';
import { cssVars } from '../../style';

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
  padding-bottom: 24px;
  ${cssVars.mediaQueryMobile} {
    flex-grow: 1;
    border-right: ${cssVars.border};
    box-sizing: border-box;
    height: 100%;
    overflow: scroll;
  }
`;
