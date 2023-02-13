import React from 'react';

export default function Modal(props) {
    const {isHelp, score, topScore, closeModal, resetGame} = props;
    //onClick={setIsHelp}
    if(isHelp){
        return(
            <div className='modal'>
                <button className='close' onClick={closeModal}>X</button>
                <h4>How to play:</h4>
                <h5>The goal is to click each of the 12 tiles exactly once</h5>
                <h5>Every time a tile is clicked, the board shuffles.</h5>
                <h5>For every new tile you click, you get one point.</h5>
                <h5>If you click the same tile more than once, you lose a point.</h5>
                <button onClick={resetGame}>Reset Game</button>
            </div>
        )
    }
    if(topScore > score){
        return(
            <div className='close' className='modal'>
                <button onClick={resetGame}>X</button>
                <h4>Game Over!</h4>
                <h5>Your score: {score}</h5>
                <h5>Top score: {topScore}</h5>
                <button onClick={resetGame}>New Game</button>
            </div>
        )
    }
}