import React from 'react';
import './Player.css';

const Player = ({player, team}) => {
  return(
    <div className="player">
      <img className="avatar" alt={player.name} src={player.img} />
      <img className="shield" src={team.shield}/>
      <h1>{player.name} <b>{player.position}</b></h1>
      <p>{team.name}</p>
    </div>
  );
}

Player.defaultProps = {
  player: {},
  team: {}
}

export default Player;
