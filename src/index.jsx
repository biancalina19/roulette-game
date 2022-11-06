import React from 'react'
import { render } from 'react-dom'
import App from './component/app'

const hereIsMyGame = document.querySelector('#here-is-my-game')

render(
    <App />,
    hereIsMyGame
)