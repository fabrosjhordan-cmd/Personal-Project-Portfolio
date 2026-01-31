import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Create a loading indicator instead of this VVV
document.fonts.ready.then(()=>{
    document.documentElement.classList.add('fonts-loaded')
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
