const express = require('express')
const userModel = require('./models/user')
const app = express();

app.use(express.json())

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

app.get('/get-users', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users)
    }
    catch (err) {
        res.send(err.message)
    }
})
app.get("/third", (req, res) => {
    res.send('Third router is running')
})
app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}`)
})

app.post('/create', async (req, res) => {
    const { name, email, password, age } = req.body
    try {
        const user = await userModel.create({
            name,
            email,
            password,
            age
        })

        res.send(user)
    }
    catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})