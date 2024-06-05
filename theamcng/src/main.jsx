import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Themestate from './Context/Themecontext/Themestate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themestate>
       <App />
    </Themestate>
  </React.StrictMode>,
)
