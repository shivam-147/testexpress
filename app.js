const express = require('express')
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("hey")
})
app.get("/first", (req, res) => {
    res.send('First router is running')
})
app.get("/second", (req, res) => {
    res.send('Second router is running')
})
app.get("/third", (req, res) => {
    res.send('Third router is running')
})
app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}`)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})