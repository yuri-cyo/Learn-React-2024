import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/null.scss'
import './styles.scss'
import App from './App.jsx'


const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
