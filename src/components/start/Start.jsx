import React from 'react'

export const Start = ({ onGame }) => {
    return (
        <div className="home">
            <div className="title">
                Typying Game
            </div>
            <div className="author">
                Iskenderov Arthur
            </div>
            <button className="btnPlay" onClick={ () => onGame('playGame') }> Play Game </button>
        </div>
    )
}
