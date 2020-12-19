import React from 'react';
import styled from 'styled-components';
import { GridData, Player } from '../../interfaces';
import { cssVars } from '../../style';

type Props = {
  cols: number;
  rows: number;
  yourInfo: Player;
  players: Player[];
};
const PlayersIndicator: React.FC<Props> = (props: Props) => {
  const { cols, rows, players, yourInfo } = props;
  const others = players.filter((player: Player) => {
    return player.id !== yourInfo.id && player.lastPaintedGrid;
  });

  const renderPlayerInfo = (player: Player) => {
    const { index } = player.lastPaintedGrid as GridData;
    const x: number = (index % cols) / cols;
    const y: number = Math.floor(index / cols) / rows;
    if (Number.isNaN(x) || Number.isNaN(y)) {
      return <div key={player.id} />;
    }
    return (
      <StyledInfo key={player.id} x={x} y={y}>
        {player.name}
      </StyledInfo>
    );
  };
  return (
    <StyledContainer>
      {others.map((player) => renderPlayerInfo(player))}
    </StyledContainer>
  );
};

export default PlayersIndicator;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background-color: rgba(255, 0, 0, 0.2);
`;

const StyledInfo = styled.div<{ x: number; y: number }>`
  position: absolute;
  display: inline-block;
  background: ${cssVars.colorBackground};
  padding: 1px 2px;
  ${(props) => `
    left: ${props.x * 100}%;
    top: ${props.y * 100}%;
  `}
`;
