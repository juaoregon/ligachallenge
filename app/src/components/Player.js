import React from 'react';
import './Player.css';

class Player extends React.Component {
  onSelectPlayer = event => {
    this.props.onSelectPlayer(this.props.player);
  }

  render() {
    return(
      <div onClick={this.onSelectPlayer} className="player">
        <img className="avatar" alt={this.props.player.name} src={this.props.player.img} />
        <img className="shield" src={this.props.team.shield}/>
        <h1>{this.props.player.name} <b>{this.props.player.position}</b></h1>
        <p>{this.props.team.name}</p>
      </div>
    );
  }
}

Player.defaultProps = {
  player: {},
  team: {}
}

export default Player;
