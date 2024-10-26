import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer.js'

const Store = configureStore({
  reducer : {
      Users : reducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>

    <App />
    </Provider>
  </StrictMode>,
)
