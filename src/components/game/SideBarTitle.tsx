import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';

type Props = {
  label: string;
};
const SideBarTitle: React.FC<Props> = (props: Props) => {
  const { label } = props;
  return <StyledTitle>{label.toUpperCase()}</StyledTitle>;
};
export default SideBarTitle;

const StyledTitle = styled.h2`
  border-bottom: ${cssVars.border};
  height: 32px;
  font-size: ${cssVars.fontSize_S};
  display: flex;
  align-items: center;
  background-color: #331d33;
  padding-left: ${cssVars.fontSize_S};
`;
