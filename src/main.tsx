import React from 'react'
import ReactDOM from 'react-dom'
import "./Styles/globalStyle.css"
import {App} from './App/App'
import { AuthProvider } from './context/auth'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
       <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
