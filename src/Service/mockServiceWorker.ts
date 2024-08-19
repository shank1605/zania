import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { data } from '../data/data';

const worker = setupWorker(
    http.get('/api/documents', ({}) => {
    return HttpResponse.json(data)
  })
);

worker.start({
    onUnhandledRequest: 'bypass', // Ignoring unhandled requests (like static files)
  });

