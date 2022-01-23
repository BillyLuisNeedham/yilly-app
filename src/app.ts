import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const router = express.Router()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World AGAIN!')
})

// TODO build out app.post /user, see it log in postman then hook into data layer
// TODO refactor into own file when done building
router.post('/', (req, res) => {
    // const userRequest = req.body
    // console.log(`userRequest from body: ${userRequest}`);
    res.send("yo")
})

// TODO refactor route for user
app.use('/', router)

app.listen(PORT, () => {
    return console.log(`listening on ${PORT}`);
})