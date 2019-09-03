/*
  Notas Ejercicio 9
  Desde el diseño de esta feature no veo que tenga mucho sentido hacer click en un jugador para luego
  realizar una operacion que puede no incluir ni a dicho jugador ni a su equipo. El ejercicio tampoco especifica
  si el equipo que seleccionas es el equipo al que va el jugador o no o si se trata de un intercambio de jugadores.

  El nuevo diseño del modal sera simplemente el equipo actual del jugador con su presupuesto, un selector de equipos
  a los que puede ir el jugador podria ir y una vez elejido el equipo saldra su presupuesto tambien (ademas del boton
  Aceptar)
*/

import React from 'react';
import '../index.css';
import './PlayerTransfer.css';

class PlayerTransfer extends React.Component {
  state = {selectedTeam: null, value: ''};

  onSelectTeam = event => {
    this.setState({ value: event.target.value });
    this.setState({ selectedTeam: this.props.teams.find(team => team.id === event.target.value) });
  }

  onAcceptTransfer = event => {
    this.props.onAcceptTransfer(this.state.selectedTeam);
  }

  render() {
    const transferTeams = this.props.teams.map((team, key) => {
      return <option key={key} value={team.id}>{team.name}</option>
    });

    let selectedTeam = '';
    if (this.state.selectedTeam) {
      selectedTeam = <div>
      <img className="selectedPlayerTeam-shield" src={this.state.selectedTeam.shield}/>
      <h3 className="selected-team">{this.state.selectedTeam.name}</h3>
      <div className="selectedTeam-money">{this.state.selectedTeam.money}€</div></div>;
    } else {
      selectedTeam= <div></div>
    }

    return(
      <div className="transfer">
        <div className="transfer-content">
          <h1>Traspaso de {this.props.player.name}</h1>
          <span className="close">&times;</span>
            <img className="selectedPlayerTeam-shield" src={this.props.selectedPlayerTeam.shield}/>
            <h3 className="selectedPlayer-team">{this.props.selectedPlayerTeam.name}</h3>
            <div className="selectedPlayerTeam-money">{this.props.selectedPlayerTeam.money}€</div>
            <i className="arrow down"></i>
            <div className="select">
              <select className="select-team" onChange={this.onSelectTeam} value={this.state.value}>
                <option value="default">Elije un equipo</option>
                {transferTeams}
              </select>
            </div>
            {selectedTeam}
            <a className="accept" onClick={this.onAcceptTransfer}>Aceptar</a>
        </div>
      </div>
    );
  }
}

PlayerTransfer.defaultProps = {
  selectedPlayer: {},
  selectedPlayerTeam: {}
}

export default PlayerTransfer;
