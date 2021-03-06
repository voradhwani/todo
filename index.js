const express = require('express')
const app = express()
const port = 3000
const tasks = []

app.use(express.json())

app.get('/todo', (req, res) => res.send(tasks))

app.post('/todo', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.send(task);
})

app.get('/todo/:id', (req, res) => { 
    const id = req.params.id;
    res.send(tasks[id])
})

app.put('/todo/:id', (req, res) => {
    const id = req.params.id;
    const task = req.body.task;
    tasks[id] = task;
    res.send(task);
})

app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    res.send(tasks.splice(id, 1));
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
