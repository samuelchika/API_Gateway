import session, { MemoryStore } from "express-session";
const protect = (req, res, next) => {
    const authorize = Math.floor(Math.random() * 10);
    console.log(authorize)
    if (authorize >= 5) {
        res.status(401).send("UNAUTHORIZED");
    }

    next();
}

const setUpAuth = (app, routes) => {
    const memeoryStore = new MemoryStore()
    app.use(session({
        secret: 'This should be changed',
        resave: false,
        saveUninitialized: true,
        store: memeoryStore
    }));

    routes.forEach(r => {
        if(r.auth) {
            // add auth middleware
            // if there is auth, just add the auth middleware
            app.use(r.url, protect);
        }
        // if there is no need for auth, just continue processing the request
        
    })
}

export default setUpAuth;
