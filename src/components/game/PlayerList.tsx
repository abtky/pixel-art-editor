import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideBarContent from './SideBarContent';
import { Player } from '../../interfaces';
import { cssVars } from '../../style';

type Props = {
  yourInfo: Player;
  players: Player[];
};
const PlayerList: React.FC<Props> = (props: Props) => {
  const { players, yourInfo } = props;

  return (
    <>
      <SideBarContent title="Players">
        <StyledList>
          {players.map((player: Player) => {
            const isYourData = yourInfo.id === player.id;
            const you = isYourData ? ` (YOU)` : '';
            return (
              <StyledListItem key={player.id} emphasize={isYourData}>
                <StyledGird color={player.color} />
                {player.name}
                {you}
              </StyledListItem>
            );
          })}
        </StyledList>
      </SideBarContent>
    </>
  );
};
export default PlayerList;

const StyledList = styled.ul``;
const StyledListItem = styled.li<{ emphasize: boolean }>`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  ${(props) => {
    if (props.emphasize) {
      return `color: white;`;
    }
    return '';
  }}
`;
const StyledGird = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  margin: 0 8px;
  position: relative;
  box-sizing: border-box;
  border: solid 2px ${cssVars.colorBackground};
  background-color: ${(props) => props.color};
  &::after {
    position: absolute;
    top: -2px;
    left: -2px;
    display: block;
    content: '';
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: solid 1px ${cssVars.colorText};
  }
`;
