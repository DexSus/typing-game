import React from 'react'
import s from './style.module.css'

export const End = ({ score, onGame }) => {
    return (
        <div className={s.endGame}>
            <div className={s.result}>
                <div>
                    <div className={s.title}>
                        Right Word
                    </div>
                    <div className={s.number}>
                        {score.right}
                    </div>
                </div>
                <div>
                <div className={s.title}>
                        Wrong Word
                    </div>
                    <div className={s.number}>
                        {score.wrong}
                    </div>
                </div>
            </div>
            <button className={s.btnPlay} onClick={ () => onGame('playGame') }> Play Game Again </button>
        </div>
    )
}
