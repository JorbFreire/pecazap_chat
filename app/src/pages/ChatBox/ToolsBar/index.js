import React from 'react';
import './styles.css';

const ToolsBar = () => {
  return (
    <div className="ToolsBar">
      <input 
        type="text"
        placeholder=""
      />
      <div />
      <button className="transferButton">TRANSFERIR</button>
      <button className="finishButton">FINALIZAR ATENDIMENTO</button>
    </div>
  )
}

export default ToolsBar;
