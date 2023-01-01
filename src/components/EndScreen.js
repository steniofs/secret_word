import React from 'react'
import './EndScreen.css'

function EndScreen({ retry, score }) {
    return (
        <div>
            <h1>Fim de jogo !!!</h1>
            <h2>Pontuação final: {score}</h2>

            <button onClick={retry}>Reiniciar jogo</button>
        </div>
    )
}

export default EndScreen;