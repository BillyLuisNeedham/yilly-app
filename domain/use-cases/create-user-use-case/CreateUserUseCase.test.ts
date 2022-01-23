import CreateUserUseCase from "./CreateUserUseCase"
import { CreateUserRequest } from "../../dtos"
import { IUserRepository } from "../../repositories"
import { testCreateUserRequest, testUser } from "../../../test-utils"

const mockUserRepository: IUserRepository = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUser: async (createUserReq: CreateUserRequest) => {
        return testUser
    }
}

describe('CreateUserUseCase', () => {

    it('should return the value returned by UserRepository', async () => {
        const createUserUseCase = new CreateUserUseCase(mockUserRepository)
        const response = await createUserUseCase.run(testCreateUserRequest)

        expect(response).toEqual(testUser)
    })
})
