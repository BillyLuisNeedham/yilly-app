import { CreateUserUseCase } from "."
import { CreateUserRequest } from "../../dtos"
import { User } from "../../models"
import { UserRepository } from "../../repositories"

const testUser: User = {
    id: -1,
    name: "Test User",
    email: "email@test.com"
}

const testCreateUserRequest: CreateUserRequest = {
    name: "Test User",
    email: "email@test.com"
}

const mockUserRepository: UserRepository = {
    createUser: async (createUserReq: CreateUserRequest) => {
        return testUser
    }
}

describe('CreateUserUseCase', () => {

    it('should return the value of User returned by UserRepository', async () => {
        const response = new CreateUserUseCase(mockUserRepository).run(testCreateUserRequest)

        expect(response).toEqual(testUser)
    })
})