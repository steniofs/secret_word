import React from 'react'
import './StartScreen.css'

function StartScreen({ startGame }) {
    return (
        <div className='start'>
            <h2>Secret Word</h2>
            <p>Clique no botão abaixo para começar o jogo</p>
            <button onClick={startGame}>Iniciar</button>
        </div>
    )
}

export default StartScreen