const express = require('express')
const path = require('path')

const app = express()
const port = 1110
const root_directory = path.resolve(__dirname, '../')

app.set('views', path.join(root_directory, "views/"))
app.set('view engine', 'pug')

app.get('/', (req, resp) => {
    resp.render('index', { message: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})