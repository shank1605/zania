import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass', // Optional: Bypass unhandled requests
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
