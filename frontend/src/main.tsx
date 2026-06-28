import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CheckerProvider } from './components/checker/CheckerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckerProvider>
      <App />
    </CheckerProvider>
  </StrictMode>,
)
