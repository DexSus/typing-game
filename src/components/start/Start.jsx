import React from 'react'
import s from './style.module.css'

export const Start = ({ onGame }) => {
    return (
        <div className={s.home}>
            <div className={s.title}>
                Typying Game
            </div>
            <div className={s.author}>
                Iskenderov Arthur
            </div>
            <button className={s.btnPlay} onClick={ () => onGame('playGame') }> Play Game </button>
        </div>
    )
}
