import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function prepare() {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass', // Ignoring unhandled requests (like static files)
    })
}

// Wait for the mocking to be ready before rendering the app
prepare().then(() => {
  const root = createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

