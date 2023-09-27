import express from 'express'
const app = new express()

app.get("/", (req, res) => {
    res.send('hello')
})

app.listen(80, () => {
    console.warn('Listen on port 80');
})