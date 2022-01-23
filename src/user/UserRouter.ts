import express from 'express'

export const userRouter = express.Router()

// TODO build out app.post /user, see it log in postman then hook into data layer
userRouter.post('/', (req, res) => {
    const body = req.body
    
    if (!body.name && !body.email) {
        res.status(400).send("invalid request body")
    }

    res.send(body)
})
