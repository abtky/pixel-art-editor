import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideBarContent from './SideBarContent';
import { Player } from '../../interfaces';

type Props = {
  players: Player[];
};
const PlayerList: React.FC<Props> = (props: Props) => {
  const { players } = props;
  return (
    <>
      <SideBarContent title="Players">
        <StyledList>
          {players.map((player: Player) => {
            return <StyledListItem>{player.name}</StyledListItem>;
          })}
        </StyledList>
      </SideBarContent>
    </>
  );
};
export default PlayerList;

const StyledList = styled.ul``;
const StyledListItem = styled.li``;
