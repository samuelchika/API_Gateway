import express from 'express';
import setUpLogging from './logging.js';
import ROUTES from './routes.js';
import setUpProxies from './proxy.js';
import setUpAuth from './auth.js';
import setRateLimiter from './ratelimit.js';

const app = express();
const port = 3000;

setUpLogging(app);
setRateLimiter(app, ROUTES)
setUpAuth(app, ROUTES);
setUpProxies(app, ROUTES);

app.get('/hello', (req, res) => {
    return res.send("Hello World")
})

app.listen(port, () => {
    console.log("App server running on port: ", port)
})