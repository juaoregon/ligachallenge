import React from 'react';
import './Pichichis.css';

const Pichichis = ({pichichis, players}) => {
  const pichichisList = () => {
    let res = [];
    pichichis.forEach((pichichi, i) => {
      res.push(Object.assign({}, pichichi, players[i]));
    })
    return res;
  }
  return(
    <div className="pichichis">
      <div className="pichichis-content">
        <span className="close">&times;</span>
        {pichichisList().map(pichichi =>
          <div key={pichichi.id} className=''>{pichichi.name}: {pichichi.goals} Goles</div>)}
      </div>
    </div>
  );
}

Pichichis.defaultProps = {
  pichichis: [],
  players: []
}

export default Pichichis;
