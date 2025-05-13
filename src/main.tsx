import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TextButton from './shared/components/text-button/text-button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TextButton/>
  </StrictMode>,
)
