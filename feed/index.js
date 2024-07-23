import express from 'express';

const app = express();
const port = 3002


app.get("/", (req, res) => {
    res.status(200).send("Welcome to feed");
})

app.get("/feeds", (req, res) => {
    res.status(200).send("This is your Feeds");
})

app.listen(port, () => {
    console.log("Chat Microservice running on port: ", port)
})

