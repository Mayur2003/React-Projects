import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-uahrixpuryzarweh.us.auth0.com"
    clientId="IwVCHtzFcv9KmcFspUSu5CvXls6AbEwV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    // <App />
  
)
