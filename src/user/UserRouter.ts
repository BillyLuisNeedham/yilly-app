import express from 'express'

export const userRouter = express.Router()

// TODO validation that req.body is a createUserRequest 

// TODO build out app.post /user, see it log in postman then hook into data layer
userRouter.post('/', (req, res) => {
    const userRequest = req.body
    // console.log(`userRequest from body: ${userRequest}`);
    res.send("yo")
})
