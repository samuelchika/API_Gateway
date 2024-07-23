import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3000;


app.use("/chat_service", createProxyMiddleware({
    target: "http://127.0.0.1:3001",
    pathRewrite: {
        "^/chat_service":""
    }
}))

app.use("/feed_service", createProxyMiddleware({
    target: "http://127.0.0.1:3002",
    pathRewrite: {
        "^/feed_service":""
    }
}))

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Microservice Gateway");
})

app.listen(port, () => {
    console.log("Chat Microservice running on port: ", port)
})

