import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../src/components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
