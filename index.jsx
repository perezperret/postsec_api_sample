import React from 'react'
import ReactDOM from 'react-dom'

import './node_modules/normalize.css'
import './index.scss'

import App from './App'

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
