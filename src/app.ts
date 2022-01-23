import express from 'express'
import bodyParser from 'body-parser'
import { userRouter } from './user'
const app = express()

const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World AGAIN!')
})

app.listen(PORT, () => {
    return console.log(`listening on ${PORT}`);
})