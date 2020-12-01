import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { GlobalStyle } from '../style';
import Grid from '../components/Grid';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const Template: Story = () => (
  <>
    <GlobalStyle />
    <StyledDiv>
      <Grid />
    </StyledDiv>
  </>
);
export const Normal = Template.bind({});

const StyledDiv = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  padding: 8px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: solid 1px rgba(255, 255, 255, 0.2);
`;
