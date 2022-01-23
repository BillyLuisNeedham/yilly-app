import express from 'express'
import { CreateUserRequest } from '../../domain'


export const userRouter = express.Router()

// TODO validation that req.body is a createUserRequest 

// TODO build out app.post /user, see it log in postman then hook into data layer
userRouter.post('/', (req, res) => {
    const body = req.body
    
    if (!body.name && !body.email) {
        res.status(400).send("invalid request body")
    }

    console.log(`userRequest from body: `)
    console.log(body)
    res.send(body)
})
