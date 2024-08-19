import { setupWorker } from 'msw/browser';
import { handlers } from '../src/mocks/handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
