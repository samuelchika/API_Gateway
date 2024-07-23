import { createProxyMiddleware } from "http-proxy-middleware";

const setUpProxies = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy))
    });
}
export default setUpProxies;