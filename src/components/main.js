import React from 'react'
import Game from '../game'

function Main() {
    const handleClick = () => {
        const field = document.getElementById('field')
        const game = new Game(field)
    }
    return    (
        <main>
            <section id="field">
                <button onClick={ handleClick }>Play</button>
            </section>
        </main>
    )
}

export default Main
