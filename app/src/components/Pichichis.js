import React from 'react';
import './Pichichis.css';

class Pichichis extends React.Component {
  state = {sortDirection: 'none'};

  onSort = event => {
    this.props.onSort(this.state.sortDirection);
    this.setState({ sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc' });
  }

  render() {
    return(
      <div className="pichichis">
        <div className="pichichis-content">
          <a className="sort" onClick={this.onSort}>Ordenar <i className={`arrow ${this.state.sortDirection}`}></i></a>
          <span className="close">&times;</span>
          {this.props.pichichis.map(pichichi =>
            <div key={pichichi.id} className=''>{pichichi.name}: {pichichi.goals} Goles</div>)}
        </div>
      </div>
    );
  }
}

Pichichis.defaultProps = {
  pichichis: []
}

export default Pichichis;
