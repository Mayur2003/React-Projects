import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './Components/reducer.js'
import { Provider } from 'react-redux'

const data = configureStore({
  reducer : {
    users : reducer
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  <Provider store={data}>

    <App />
  </Provider>

 
  </StrictMode>,
)
