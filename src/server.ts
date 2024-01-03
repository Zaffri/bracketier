import { createServer } from 'http';
import { v4 as uuidv4 } from 'uuid';
import { parse } from 'url';
import next from'next';
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const correlationId = uuidv4();
      req.headers['x-correlation-id'] = correlationId;
      res.setHeader('x-correlation-id', correlationId);

      console.log({ type: 'request', method: req.method, url: req.url, correlationId: req.headers['x-correlation-id'] });

      const parsedUrl = parse(req.url!, true);
      await handle(req, res, parsedUrl);

      console.log({ type: 'response', status: res.statusCode, method: req.method, url: req.url, correlationId: res.getHeaders()['x-correlation-id'] });
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
});