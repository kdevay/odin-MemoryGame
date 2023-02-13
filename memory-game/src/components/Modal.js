import React from 'react';

export default function Modal(props) {
    const {isHelp, score, topScore, close, reset} = props;

    //onClick={setIsHelp}
    if (isHelp){
        return(
        <div id='modalShadow' onClick={close}>
            <div className='modal'>
                <button className='close' onClick={close}>X</button><br></br>
                <div className='modalCenter'>
                    <div>
                        <h3>How to play:</h3>
                        <h5>The goal is to click each of the 12 tiles exactly once</h5>
                        <h5>Every time a tile is clicked, the board shuffles.</h5>
                        <h5>For every new tile you click, you get one point.</h5>
                        <h5>If you click the same tile more than once, you lose a point.</h5>
                    </div>
                    <br></br><button onClick={reset}>Reset Game</button>
                </div>
            </div>
        </div>
        )
    } else if (topScore > score){
        return(
            <div id='modalShadow' onClick={reset}>
                <div className='modal'>
                    <button className='close' onClick={reset}>X</button><br></br>
                    <div className='modalCenter'>
                        <div>
                                <h3>Game Over!</h3>
                                <h5>Your score: {score}</h5>
                                <h5>Top score: {topScore}</h5>
                        </div>
                        <br></br><button onClick={reset}>New Game</button>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div id='modalShadow' onClick={reset}>
            <div className='modal'>
                <button className='close' onClick={reset}>X</button><br></br>
                <div className='modalCenter'>
                    <div>
                        <h3>Game over!</h3>
                        { 
                            score === 12 
                            ? <h4>You won a perfect score!</h4>
                            : <h4> New Top Score!</h4>
                        }
                        <h5>Your score: {score}</h5>
                        <h5>Top score: {topScore}</h5>
                    </div>
                    <br></br><button onClick={reset}>New Game</button>
                </div>
            </div>
        </div>
    )
}