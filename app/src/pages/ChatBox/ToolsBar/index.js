import React from 'react';
import './styles.css';

const TolsBar = () => {
  return (
    <div className="TolsBar">
      <input type="text"/>
      <button className="transferButton">TRANSFERIR</button>
      <button className="finishButton">FINALIZAR ATENDIMENTO</button>
    </div>
  )
}

export default TolsBar;
