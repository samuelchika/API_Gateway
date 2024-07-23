import rateLimit from "express-rate-limit";

console.log("Here")
const setRateLimiter = (app, routers) => {
    routers.forEach(r => {
        if(r.rateLimit) {
            app.use(r.url, rateLimit(r.rateLimit));
        }
    })
}
export default setRateLimiter;