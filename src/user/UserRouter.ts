import express from 'express'
import { CreateUserUseCase } from '../../data'
import { CreateUserRequest } from '../../domain'

export const userRouter = express.Router()

// TODO refactor into own function
const isError = (err: unknown) : err is Error => err instanceof Error

userRouter.post('/', async (req, res) => {
    const body = req.body
    
    if (!body.name && !body.email) {
        res.status(400).send("invalid request body")
    }

    const useCase = new CreateUserUseCase()
    const createUserReq: CreateUserRequest = {
        name: body.name,
        email: body.email
    }
    const result = await useCase.run(createUserReq)

    if (isError(result)) {
        res.status(500).send("something went wrong while creating user")
    }

    res.send(result)
})
