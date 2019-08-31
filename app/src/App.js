import React, {PureComponent} from 'react'
import './App.css'
import reactSvg from './react.svg'

const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = {
    players: []
  }

  componentDidMount() {
    fetch(`${domain}/players`).then(response => {
      return response.json();
    }).then(players => {
      this.setState({players})
    });
  }

  render() {
    const {players} = this.state

    return <div className="App">
      <header className="App-heading App-flex">
        <h2>Bienvenido a la prueba de los equipos</h2>
      </header>
      <div className="App-teams App-flex">
        {/*
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre.
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres.
          ** Los comentarios de los ejercicios no los borres.
        */
        }
        <h3>Los jugadores:</h3>
        <ul>
          {/*
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */
          }
          {players.map(player => <li key={player.id}>{player.name}</li>)}
        </ul>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={reactSvg}/>
        <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
      </div>
    </div>
  }
}

export default App
