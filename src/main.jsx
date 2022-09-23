import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// styles
import './index.css'

// components
import App from './App'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
