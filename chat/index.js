import express from 'express';

const app = express();
const port = 3001


app.get("/", (req, res) => {
    res.status(200).send("Welcome to chatservice");
})

app.get("/friends", (req, res) => {
    res.status(200).send("List of Friend for this chat");
})

app.listen(port, () => {
    console.log("Chat Microservice running on port: ", port)
})

