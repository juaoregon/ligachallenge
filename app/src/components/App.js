import React, {PureComponent} from 'react'
import Player from './Player'
import './App.css'
import reactSvg from '../react.svg'

const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = { players: [], teams: [] }

  componentDidMount() {
    fetch(`${domain}/players`).then(response => {
      return response.json();
    }).then(players => {
      this.setState({players})
    });

    fetch(`${domain}/teams`).then(response => {
      return response.json();
    }).then(teams => {
      this.setState({teams})
    });
  }

  render() {
    return <div className="App">
      <header className="App-heading">
        <a href="/">Pichichis</a>
      </header>
      <div className="App-players App-flex">
        {/*
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre.
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres.
          ** Los comentarios de los ejercicios no los borres.
        */
        }
        {/*
          TODO ejercicio 3
          Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
          Guiate por las imágenes.
         */
        }
        {this.state.players.map(player =>
          <Player key={player.id} player={player} team={this.state.teams.find(team => {return player.teamId === team.id})}
        />)}
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={reactSvg}/>
        <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
      </div>
    </div>
  }
}

export default App