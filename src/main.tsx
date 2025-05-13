import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Card from './shared/components/card/card.tsx'
import { CardH, CardV } from './assets/svg/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Card cardIcon={<CardV/>} mode='vertical' cardName='the Red'/>
    <Card cardIcon={<CardH/>}mode='horizontal' cardName='American Express
The Platinum Card  Edition2'/>
  </StrictMode>,
)
