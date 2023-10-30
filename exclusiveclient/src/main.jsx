import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import AppProvider from './contextapi/Contextprovider.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId={client_id} >
       <React.StrictMode>
          <AppProvider>
               <App />
          </AppProvider>
       </React.StrictMode>
  </GoogleOAuthProvider>
)
