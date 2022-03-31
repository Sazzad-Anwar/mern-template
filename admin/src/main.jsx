import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerSW } from 'virtual:pwa-register'

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  // const updateSW = registerSW({
  //   onNeedRefresh() { },
  //   onOfflineReady() { },
  // })
  // updateSW()
  registerSW()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)