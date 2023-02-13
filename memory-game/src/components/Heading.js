import React from 'react';

export default function Heading(props) {
    const {setIsHelp, score, topScore} = props;
    return(
        <div id='heading'>
            <button onClick={handleHelp}>?</button>
            <h1 id='title'>Memory Game</h1>
            <div id='scoreBoard'>
                <h5>Score: {score}</h5>
                <h5>Top Score: {topScore}</h5>
            </div>
        </div>
    )
}