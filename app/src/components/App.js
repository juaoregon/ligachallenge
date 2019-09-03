import React, {PureComponent} from 'react'
import Player from './Player'
import Pichichis from './Pichichis'
import './App.css'
import reactSvg from '../react.svg'

const domain = 'http://localhost:3001'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      players: JSON.parse(localStorage.getItem('players')) || [],
      teams: JSON.parse(localStorage.getItem('teams')) || [],
      pichichis: JSON.parse(localStorage.getItem('pichichis')) || []
    }
    this.sortTable = this.sortPichichis.bind(this)
  }

  componentDidMount() {
    fetch(`${domain}/players`).then(response => {
      return response.json();
    }).then(players => {
      this.setState({players})
      localStorage.setItem('players', JSON.stringify(players));
    });

    fetch(`${domain}/teams`).then(response => {
      return response.json();
    }).then(teams => {
      this.setState({teams})
      localStorage.setItem('teams', JSON.stringify(teams));
    });

    fetch(`${domain}/pichichis`).then(response => {
      return response.json();
    }).then(pichichis => {
      let pichichisList = [];
      pichichis.forEach((pichichi, i) => {
        pichichisList.push(Object.assign({}, pichichi, this.state.players[i]));
      })
      this.setState({pichichis: pichichisList})
      localStorage.setItem('pichichis', JSON.stringify(pichichisList));
    });
  }

  onClickPichichis = event => {
    document.querySelector('.pichichis').style.display = 'block';

    document.querySelector('.close').onclick = () => {
      document.querySelector('.pichichis').style.display = 'none';
    }

    window.onclick = event => {
      if (event.target == document.querySelector('.pichichis')) {
        document.querySelector('.pichichis').style.display = 'none';
      }
    }
  }

  sortPichichis = direction => {
    const sortedPichichis = this.state.pichichis.sort((a,b) => {
      const valueA = a.goals;
      const valueB = b.goals;
      let res = 0;
      if (direction === 'asc') {
        res = (valueA < valueB) ? -1 : (valueA > valueB) ? 1 : 0;
      } else if (direction === 'desc' || direction === 'none') {
        res = (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
      }
      return res;
    });
    this.setState({ pichichis: sortedPichichis });
  }

  render() {
    return (
      <div className="App">
        <header className="App-heading">
          <a onClick={this.onClickPichichis}>Pichichis</a>
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
        <Pichichis onSort={this.sortPichichis} pichichis={this.state.pichichis} />
      </div>
    );
  }
}

export default App
